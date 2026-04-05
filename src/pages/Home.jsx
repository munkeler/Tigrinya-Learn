import { Link } from "react-router-dom";
import { BookOpen, Map, Star } from "lucide-react";
import { useProgress } from "../context/ProgressContext";
import { lessons } from "../data/lessons";

export default function Home() {
  const { getLessonProgress, getBestScore } = useProgress();

  const totalLessons = lessons.length;
  const completedLessons = lessons.filter(
    (l) => getLessonProgress(l.id, l.items.length) === 100
  ).length;
  const lessonsWithQuiz = lessons.filter((l) => getBestScore(l.id) !== null).length;

  return (
    <div className="home-page">
      <section className="hero">
        <h1>
          Learn <span className="highlight">ትግርኛ</span> (Tigrinya)
        </h1>
        <p className="hero-subtitle">
          A free, open app to learn the Tigrinya language — from the Ge'ez script
          to everyday conversation. Built for English speakers.
        </p>
        <div className="hero-actions">
          <Link to="/lessons" className="btn btn-primary">
            <BookOpen size={20} />
            Start Learning
          </Link>
          <Link to="/roadmap" className="btn btn-secondary">
            <Map size={20} />
            View Roadmap
          </Link>
        </div>
      </section>

      <section className="stats-bar">
        <div className="stat">
          <span className="stat-number">{totalLessons}</span>
          <span className="stat-label">Lessons</span>
        </div>
        <div className="stat">
          <span className="stat-number">{completedLessons}</span>
          <span className="stat-label">Completed</span>
        </div>
        <div className="stat">
          <span className="stat-number">{lessonsWithQuiz}</span>
          <span className="stat-label">Quizzes Taken</span>
        </div>
      </section>

      <section className="about-section">
        <h2>About Tigrinya</h2>
        <div className="about-grid">
          <div className="about-card">
            <h3>What is Tigrinya?</h3>
            <p>
              Tigrinya (ትግርኛ) is a Semitic language spoken by approximately 9 million people,
              primarily in Eritrea (where it is the most widely spoken language) and in the
              Tigray region of northern Ethiopia.
            </p>
          </div>
          <div className="about-card">
            <h3>The Ge'ez Script (ፊደል)</h3>
            <p>
              Unlike English's alphabet, Tigrinya uses a syllabary called Fidel (ፊደል).
              Each character represents a consonant-vowel pair. There are 7 vowel "orders"
              for each consonant, creating a rich and beautiful writing system.
            </p>
          </div>
          <div className="about-card">
            <h3>Why Learn Tigrinya?</h3>
            <p>
              Tigrinya is underserved by major language apps. Whether you have family
              roots, cultural interest, or love learning unique scripts, this app gives
              you a structured path to learn.
            </p>
          </div>
        </div>
      </section>

      <section className="quick-start">
        <h2>Quick Start</h2>
        <div className="quick-cards">
          {lessons.slice(0, 3).map((lesson) => {
            const pct = getLessonProgress(lesson.id, lesson.items.length);
            const best = getBestScore(lesson.id);
            return (
              <Link to={`/lesson/${lesson.id}`} key={lesson.id} className="quick-card">
                <h3>{lesson.title}</h3>
                <p>{lesson.description}</p>
                <div className="quick-card-footer">
                  <div className="progress-mini">
                    <div className="progress-mini-bar" style={{ width: `${pct}%` }} />
                  </div>
                  {best !== null && (
                    <span className="best-score">
                      <Star size={14} /> {best}%
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
