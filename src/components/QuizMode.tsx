import type { Kana } from "../data/kana.ts";
import useQuiz from "../hooks/useQuiz.ts";

interface QuizModeProps {
  script: 'hiragana' | 'katakana';
  kanaData: Kana[];
}

function QuizMode({ script, kanaData }: QuizModeProps) {
  const {
    currentKana,
    userAnswer,
    setUserAnswer,
    score,
    bestScore,
    feedback,
    inputRef,
    handleSubmit
  } = useQuiz(kanaData);

  const displayChar = script === 'hiragana'
      ? currentKana.hiragana
      : currentKana.katakana;

  return (
      <div>
          <div className="score">
              <div className="score">Score actuel : {score.correct} / {score.total}</div>
              <div className="best-score">🏆 Record : {bestScore}</div>
          </div>

          <div className="quiz-character">
              <h2>{displayChar}</h2>
          </div>

          <form onSubmit={handleSubmit}>
          <input
              ref={inputRef}
              type="text"
              value={userAnswer}
              onChange={e => setUserAnswer(e.target.value)}
              placeholder="Romanji..."
          />
          <button type="submit">Valider</button>
        </form>

        {feedback && <div className="feedback">{feedback}</div>}
      </div>
  );
}

export default QuizMode;