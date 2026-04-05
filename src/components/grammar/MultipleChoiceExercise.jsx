import { useState } from "react";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";

export default function MultipleChoiceExercise({ exercise }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = exercise.questions[currentQ];

  const handleSelect = (option) => {
    if (answered) return;
    setSelected(option);
    setAnswered(true);
    if (option === question.correctAnswer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQ < exercise.questions.length - 1) {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setCurrentQ(0);
    setSelected(null);
    setAnswered(false);
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

      <div className="mc-question">
        <div className="mc-prompt">
          <span className="mc-prompt-tigrinya">{question.prompt}</span>
          {question.promptTranslit && (
            <span className="mc-prompt-translit">{question.promptTranslit}</span>
          )}
        </div>

        <div className="mc-options">
          {question.options.map((option) => {
            let className = "mc-option";
            if (answered) {
              if (option === question.correctAnswer) className += " correct";
              else if (option === selected) className += " wrong";
              else className += " dimmed";
            }
            return (
              <button
                key={option}
                className={className}
                onClick={() => handleSelect(option)}
                disabled={answered}
              >
                {option}
                {answered && option === question.correctAnswer && <CheckCircle size={16} />}
                {answered && option === selected && option !== question.correctAnswer && <XCircle size={16} />}
              </button>
            );
          })}
        </div>

        {answered && (
          <div className="mc-feedback">
            <p className="mc-explanation">{question.explanation}</p>
            <button onClick={handleNext} className="btn btn-primary btn-sm">
              {currentQ < exercise.questions.length - 1 ? "Next" : "See Results"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
