import type {Kana} from "../data/kana.ts";
import {useState} from "react";

interface QuizModeProps {
  script: 'hiragana' | 'katakana';
  kanaData: Kana[];
}

function QuizMode({ script, kanaData }: QuizModeProps) {
  const [currentIndex, setCurrentIndex] = useState(()=>Math.floor(Math.random() * kanaData.length));
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [feedback, setFeedback] = useState('');

  const currentKana = kanaData[currentIndex];
  const displayChar = script === 'hiragana'
      ? currentKana.hiragana
      : currentKana.katakana;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isCorrect = userAnswer.toLowerCase().trim() ===
        currentKana.romanji.toLowerCase();

    setScore({
      correct: score.correct + (isCorrect ? 1 : 0),
      total: score.total + 1
    });

    setFeedback(isCorrect ? 'Correct !' : `Incorrect. C'était ${currentKana.romanji}`);
    setUserAnswer('');

    // Passer au suivant après un délai
    setTimeout(() => {
      setCurrentIndex((Math.floor(Math.random() * kanaData.length)));
      setFeedback('');
    }, 1500);
  };

  return (
      <div>
        <div className="score">
          Score : {score.correct} / {score.total}
        </div>

        <div className="quiz-character">
          <h2>{displayChar}</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <input
              type="text"
              value={userAnswer}
              onChange={e => setUserAnswer(e.target.value)}
              placeholder="Romanji..."
              autoFocus
          />
          <button type="submit">Valider</button>
        </form>

        {feedback && <div className="feedback">{feedback}</div>}
      </div>
  );
}
export default QuizMode;