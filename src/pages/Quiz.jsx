import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { CheckCircle, XCircle, RotateCcw, ArrowLeft } from "lucide-react";
import { lessons } from "../data/lessons";
import { useProgress } from "../context/ProgressContext";

function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function generateQuestions(lesson) {
  const items = lesson.items;
  const questions = [];

  // For each item, create a multiple-choice question
  const shuffledItems = shuffleArray(items);
  const questionItems = shuffledItems.slice(0, Math.min(10, items.length));

  for (const item of questionItems) {
    // Get 3 wrong answers from other items
    const others = items.filter((i) => i !== item);
    const wrongOptions = shuffleArray(others).slice(0, 3);
    const options = shuffleArray([
      { text: item.english, correct: true },
      ...wrongOptions.map((w) => ({ text: w.english, correct: false })),
    ]);

    questions.push({
      prompt: item.tigrinya,
      transliteration: item.transliteration,
      options,
      correctAnswer: item.english,
    });
  }

  return questions;
}

export default function Quiz() {
  const { id } = useParams();
  const lesson = lessons.find((l) => l.id === id);
  const { recordQuizScore } = useProgress();
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answered, setAnswered] = useState(false);

  const questions = useMemo(
    () => (lesson ? generateQuestions(lesson) : []),
    [lesson?.id]
  );

  if (!lesson) {
    return (
      <div className="not-found">
        <h2>Lesson not found</h2>
        <Link to="/lessons">Back to lessons</Link>
      </div>
    );
  }

  if (lesson.items.length < 4) {
    return (
      <div className="quiz-page">
        <h1>Quiz: {lesson.title}</h1>
        <p>This lesson needs at least 4 items for a quiz. Keep learning!</p>
        <Link to={`/lesson/${lesson.id}`} className="btn btn-primary">
          Back to Lesson
        </Link>
      </div>
    );
  }

  const question = questions[currentQ];

  const handleSelect = (option, index) => {
    if (answered) return;
    setSelected(index);
    setAnswered(true);
    if (option.correct) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      const finalScore = score;
      recordQuizScore(lesson.id, finalScore, questions.length);
      setFinished(true);
    }
  };

  const restart = () => {
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setAnswered(false);
  };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="quiz-page">
        <div className="quiz-result">
          <h1>Quiz Complete!</h1>
          <div className={`score-circle ${pct >= 70 ? "good" : "needs-work"}`}>
            <span className="score-pct">{pct}%</span>
          </div>
          <p className="score-detail">
            You got <strong>{score}</strong> out of <strong>{questions.length}</strong> correct
          </p>
          {pct >= 70 ? (
            <p className="score-message">Great job! You're making excellent progress.</p>
          ) : (
            <p className="score-message">Keep practicing! Review the lesson and try again.</p>
          )}
          <div className="quiz-result-actions">
            <button onClick={restart} className="btn btn-secondary">
              <RotateCcw size={16} /> Try Again
            </button>
            <Link to={`/lesson/${lesson.id}`} className="btn btn-secondary">
              <ArrowLeft size={16} /> Review Lesson
            </Link>
            <Link to="/lessons" className="btn btn-primary">
              All Lessons
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-page">
      <div className="quiz-header">
        <Link to={`/lesson/${lesson.id}`} className="back-link">
          <ArrowLeft size={20} /> Back
        </Link>
        <h1>Quiz: {lesson.title}</h1>
        <div className="quiz-progress">
          Question {currentQ + 1} of {questions.length}
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="quiz-question">
        <div className="question-prompt">
          <span className="question-label">What does this mean?</span>
          <span className="question-tigrinya">{question.prompt}</span>
          {answered && (
            <span className="question-translit">{question.transliteration}</span>
          )}
        </div>

        <div className="options-grid">
          {question.options.map((option, i) => {
            let className = "option-btn";
            if (answered) {
              if (option.correct) className += " correct";
              else if (i === selected) className += " wrong";
              else className += " dimmed";
            } else if (i === selected) {
              className += " selected";
            }
            return (
              <button
                key={i}
                className={className}
                onClick={() => handleSelect(option, i)}
                disabled={answered}
              >
                {option.text}
                {answered && option.correct && <CheckCircle size={18} />}
                {answered && i === selected && !option.correct && <XCircle size={18} />}
              </button>
            );
          })}
        </div>

        {answered && (
          <button onClick={handleNext} className="btn btn-primary quiz-next-btn">
            {currentQ < questions.length - 1 ? "Next Question" : "See Results"}
          </button>
        )}
      </div>

      <div className="quiz-score-bar">
        Score: {score}/{currentQ + (answered ? 1 : 0)}
      </div>
    </div>
  );
}
