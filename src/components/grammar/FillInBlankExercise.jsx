import { useState } from "react";
import { CheckCircle, XCircle, RotateCcw, HelpCircle } from "lucide-react";

export default function FillInBlankExercise({ exercise }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [input, setInput] = useState("");
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
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
      setShowHint(false);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setCurrentQ(0);
    setInput("");
    setAnswered(false);
    setIsCorrect(false);
    setShowHint(false);
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

  // Split sentence around the blank
  const sentenceParts = question.sentence.split("___");

  return (
    <div className="exercise-card">
      <h3 className="exercise-title">{exercise.title}</h3>
      <p className="exercise-instruction">{exercise.instruction}</p>

      <div className="exercise-progress-mini">
        {currentQ + 1} / {exercise.questions.length}
      </div>

      <div className="fib-question">
        <div className="fib-sentence">
          <span className="fib-part">{sentenceParts[0]}</span>
          <span className={`fib-blank ${answered ? (isCorrect ? "correct" : "wrong") : ""}`}>
            {answered ? question.correctAnswer : input || "___"}
          </span>
          <span className="fib-part">{sentenceParts[1]}</span>
        </div>

        {!answered && (
          <form onSubmit={handleSubmit} className="fib-form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Type the ${question.blank}...`}
              className="fib-input"
              autoFocus
              dir="rtl"
              lang="ti"
            />
            <button type="submit" className="btn btn-primary btn-sm" disabled={!input.trim()}>
              Check
            </button>
            {!showHint && (
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => setShowHint(true)}
              >
                <HelpCircle size={14} /> Hint
              </button>
            )}
          </form>
        )}

        {showHint && !answered && (
          <div className="fib-hint">
            <HelpCircle size={14} /> {question.hint}
          </div>
        )}

        {answered && (
          <div className={`fib-feedback ${isCorrect ? "correct" : "wrong"}`}>
            <div className="fib-feedback-icon">
              {isCorrect ? <CheckCircle size={18} /> : <XCircle size={18} />}
              <span>{isCorrect ? "Correct!" : `The answer was: ${question.correctAnswer}`}</span>
            </div>
            <p className="fib-explanation">{question.explanation}</p>
            <button onClick={handleNext} className="btn btn-primary btn-sm">
              {currentQ < exercise.questions.length - 1 ? "Next" : "See Results"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
