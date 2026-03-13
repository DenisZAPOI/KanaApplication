import { useState, useEffect, useRef } from "react";
import type { Kana } from "../data/kana";
import useLocalStorage from "./useLocalStorage.ts";

function useQuiz(kanaData: Kana[]) {
    const [currentIndex, setCurrentIndex] = useState(() => Math.floor(Math.random() * kanaData.length));
    const [userAnswer, setUserAnswer] = useState('');
    const [score, setScore] = useState({ correct: 0, total: 0 });
    const [feedback, setFeedback] = useState('');
    const [bestScore, setBestScore] = useLocalStorage("record", 0);
    const inputRef = useRef<HTMLInputElement>(null);

    // Gestion du focus automatique
    useEffect(() => {
        inputRef.current?.focus();
    }, [currentIndex]);

    const currentKana = kanaData[currentIndex];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!userAnswer) return;

        const isCorrect = userAnswer.toLowerCase().trim() === currentKana.romanji.toLowerCase();

        const nextCorrect = score.correct + (isCorrect ? 1 : 0);

        if (nextCorrect > bestScore) {
            setBestScore(nextCorrect);
        }
        setScore(prev => ({
            correct: nextCorrect,
            total: prev.total + 1
        }));

        setFeedback(isCorrect ? 'Correct !' : `Incorrect. C'était ${currentKana.romanji}`);
        setUserAnswer('');

        setTimeout(() => {
            setCurrentIndex(Math.floor(Math.random() * kanaData.length));
            setFeedback('');
        }, 1500);
    };

    return {
        currentKana,
        userAnswer,
        setUserAnswer,
        score,
        bestScore,
        feedback,
        inputRef,
        handleSubmit
    };
} export default useQuiz;