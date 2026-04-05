import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, RotateCcw, ClipboardCheck } from "lucide-react";
import { lessons } from "../data/lessons";
import { useProgress } from "../context/ProgressContext";

export default function LessonView() {
  const { id } = useParams();
  const lesson = lessons.find((l) => l.id === id);
  const { markItemLearned, getLessonProgress } = useProgress();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [mode, setMode] = useState("learn"); // "learn" or "cards"

  if (!lesson) {
    return (
      <div className="not-found">
        <h2>Lesson not found</h2>
        <Link to="/lessons">Back to lessons</Link>
      </div>
    );
  }

  const item = lesson.items[currentIndex];
  const pct = getLessonProgress(lesson.id, lesson.items.length);

  const goNext = () => {
    markItemLearned(lesson.id, currentIndex);
    setFlipped(false);
    if (currentIndex < lesson.items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goPrev = () => {
    setFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const restart = () => {
    setCurrentIndex(0);
    setFlipped(false);
  };

  return (
    <div className="lesson-view-page">
      <div className="lesson-header">
        <Link to="/lessons" className="back-link">
          <ChevronLeft size={20} /> Lessons
        </Link>
        <h1>{lesson.title}</h1>
        <div className="progress-bar lesson-progress">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
        <span className="progress-text">{pct}% complete</span>
      </div>

      {lesson.intro && mode === "learn" && currentIndex === 0 && !flipped && (
        <div className="lesson-intro">
          <p>{lesson.intro}</p>
        </div>
      )}

      <div className="mode-toggle">
        <button
          className={`mode-btn ${mode === "learn" ? "active" : ""}`}
          onClick={() => setMode("learn")}
        >
          Learn
        </button>
        <button
          className={`mode-btn ${mode === "cards" ? "active" : ""}`}
          onClick={() => { setMode("cards"); setFlipped(false); }}
        >
          Flashcards
        </button>
      </div>

      {mode === "learn" ? (
        <div className="learn-mode">
          <div className="learn-card">
            <div className="learn-tigrinya">{item.tigrinya}</div>
            <div className="learn-translit">{item.transliteration}</div>
            <div className="learn-english">{item.english}</div>
          </div>

          <div className="card-nav">
            <button onClick={goPrev} disabled={currentIndex === 0} className="btn btn-nav">
              <ChevronLeft size={20} /> Previous
            </button>
            <span className="card-counter">
              {currentIndex + 1} / {lesson.items.length}
            </span>
            {currentIndex < lesson.items.length - 1 ? (
              <button onClick={goNext} className="btn btn-nav btn-primary">
                Next <ChevronRight size={20} />
              </button>
            ) : (
              <button onClick={() => { markItemLearned(lesson.id, currentIndex); }} className="btn btn-nav btn-primary">
                Complete
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="flashcard-mode">
          <div
            className={`flashcard ${flipped ? "flipped" : ""}`}
            onClick={() => setFlipped(!flipped)}
          >
            <div className="flashcard-inner">
              <div className="flashcard-front">
                <span className="flashcard-label">Tigrinya</span>
                <span className="flashcard-text">{item.tigrinya}</span>
                <span className="flashcard-hint">Tap to reveal</span>
              </div>
              <div className="flashcard-back">
                <span className="flashcard-label">English</span>
                <span className="flashcard-text">{item.english}</span>
                <span className="flashcard-translit">{item.transliteration}</span>
              </div>
            </div>
          </div>

          <div className="card-nav">
            <button onClick={goPrev} disabled={currentIndex === 0} className="btn btn-nav">
              <ChevronLeft size={20} /> Prev
            </button>
            <span className="card-counter">
              {currentIndex + 1} / {lesson.items.length}
            </span>
            <button
              onClick={goNext}
              disabled={currentIndex === lesson.items.length - 1}
              className="btn btn-nav btn-primary"
            >
              Next <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}

      <div className="lesson-actions">
        <button onClick={restart} className="btn btn-secondary">
          <RotateCcw size={16} /> Restart
        </button>
        <Link to={`/quiz/${lesson.id}`} className="btn btn-primary">
          <ClipboardCheck size={16} /> Take Quiz
        </Link>
      </div>
    </div>
  );
}
