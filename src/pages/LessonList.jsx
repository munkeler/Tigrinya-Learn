import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { lessons, categories } from "../data/lessons";
import { useProgress } from "../context/ProgressContext";

export default function LessonList() {
  const { getLessonProgress, getBestScore } = useProgress();

  return (
    <div className="lesson-list-page">
      <h1>Lessons</h1>
      <p className="page-subtitle">Choose a lesson to begin learning Tigrinya</p>

      {categories.map((cat) => {
        const catLessons = lessons.filter((l) => l.category === cat.id);
        if (catLessons.length === 0) return null;
        return (
          <section key={cat.id} className="lesson-category">
            <h2>
              <span className="cat-icon">{cat.icon}</span> {cat.name}
            </h2>
            <p className="cat-desc">{cat.description}</p>
            <div className="lesson-grid">
              {catLessons.map((lesson) => {
                const pct = getLessonProgress(lesson.id, lesson.items.length);
                const best = getBestScore(lesson.id);
                return (
                  <Link to={`/lesson/${lesson.id}`} key={lesson.id} className="lesson-card">
                    <h3>{lesson.title}</h3>
                    <p>{lesson.description}</p>
                    <div className="lesson-card-meta">
                      <span className="item-count">{lesson.items.length} items</span>
                      {best !== null && (
                        <span className="best-score">
                          <Star size={14} /> {best}%
                        </span>
                      )}
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${pct}%` }} />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
