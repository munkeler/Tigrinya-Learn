import { useState } from "react";
import { CheckCircle, XCircle, RotateCcw, ArrowRight } from "lucide-react";

export default function TransformExercise({ exercise }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [input, setInput] = useState("");
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = exercise.questions[currentQ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answered || !input.trim()) return;
    const correct = input.trim() === question.correctAnswer;
    setIsCorrect(correct);
    setAnswered(true);
    if (correct) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (currentQ < exercise.questions.length - 1) {
      setCurrentQ((q) => q + 1);
      setInput("");
      setAnswered(false);
      setIsCorrect(false);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setCurrentQ(0);
    setInput("");
    setAnswered(false);
    setIsCorrect(false);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const pct = Math.round((score / exercise.questions.length) * 100);
    return (
      <div className="exercise-card">
        <h3 className="exercise-title">{exercise.title}</h3>
        <div className="exercise-result">
          <span className={`exercise-score ${pct >= 70 ? "good" : "needs-work"}`}>
            {pct}% — {score}/{exercise.questions.length}
          </span>
          <button onClick={restart} className="btn btn-secondary btn-sm">
            <RotateCcw size={14} /> Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="exercise-card">
      <h3 className="exercise-title">{exercise.title}</h3>
      <p className="exercise-instruction">{exercise.instruction}</p>

      <div className="exercise-progress-mini">
        {currentQ + 1} / {exercise.questions.length}
      </div>

      <div className="transform-question">
        <div className="transform-source">
          <span className="transform-label">Positive:</span>
          <span className="transform-tigrinya">{question.positive}</span>
          <span className="transform-translit">{question.positiveTranslit}</span>
          <span className="transform-meaning">{question.positiveMeaning}</span>
        </div>

        <div className="transform-arrow">
          <ArrowRight size={24} />
          <span>Negate it!</span>
        </div>

        <div className="transform-target">
          <span className="transform-label">Negative:</span>
          {answered ? (
            <span className={`transform-answer ${isCorrect ? "correct" : "wrong"}`}>
              {question.correctAnswer}
            </span>
          ) : (
            <form onSubmit={handleSubmit} className="transform-form">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type the negative form..."
                className="fib-input"
                autoFocus
                dir="rtl"
                lang="ti"
              />
              <button type="submit" className="btn btn-primary btn-sm" disabled={!input.trim()}>
                Check
              </button>
            </form>
          )}
        </div>

        {answered && (
          <div className={`transform-feedback ${isCorrect ? "correct" : "wrong"}`}>
            <div className="fib-feedback-icon">
              {isCorrect ? <CheckCircle size={18} /> : <XCircle size={18} />}
              <span>
                {isCorrect ? "Correct!" : `Answer: ${question.correctAnswer} (${question.correctTranslit})`}
              </span>
            </div>
            <p className="fib-explanation">
              {question.correctMeaning} — {question.explanation}
            </p>
            <button onClick={handleNext} className="btn btn-primary btn-sm">
              {currentQ < exercise.questions.length - 1 ? "Next" : "See Results"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
