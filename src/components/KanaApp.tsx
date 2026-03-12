import {useState} from "react";
import QuizMode from "./QuizMode.tsx";
import StudyMode from "./StudyMode.tsx";
import {kanaData} from "../data/kana.ts";

function KanaApp() {
    // États
    const [script, setScript] = useState<'hiragana' | 'katakana'>('hiragana');
    const [mode, setMode] = useState<'study' | 'quiz'>('study');



    // Fonctions
    const switchMode = (newMode: 'study' | 'quiz') => {
        setMode(newMode);
        // Réinitialiser le quiz si nécessaire
    };


    return (
        <div>
            {/* Navigation mode */}
            <nav>
                <button onClick={() => switchMode('study')}>Étude</button>
                <button onClick={() => switchMode('quiz')}>Quiz</button>
            </nav>

            {/* Sélection script (hiragana/katakana) */}
            {mode === 'study' && (
                <div>
                    <label>
                        <input
                            type="radio"
                            checked={script === 'hiragana'}
                            onChange={() => setScript('hiragana')}
                        />
                        Hiragana
                    </label>
                    <label>
                        <input
                            type="radio"
                            checked={script === 'katakana'}
                            onChange={() => setScript('katakana')}
                        />
                        Katakana
                    </label>
                </div>
            )}

            {/* Affichage conditionnel */}
            {mode === 'study' && <StudyMode script={script} kanaData={kanaData} />}
            {mode === 'quiz' && <QuizMode script={script} kanaData={kanaData} />}
                </div>
                );
            }
            export default KanaApp;
