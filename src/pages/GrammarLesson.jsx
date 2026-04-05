import { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, BookOpen, Gamepad2, Lightbulb } from "lucide-react";
import { grammarLessons } from "../data/grammarLessons";
import ExplanationSection from "../components/grammar/ExplanationSection";
import ConjugationTableSection from "../components/grammar/ConjugationTableSection";
import MultipleChoiceExercise from "../components/grammar/MultipleChoiceExercise";
import MatchingExercise from "../components/grammar/MatchingExercise";
import FillInBlankExercise from "../components/grammar/FillInBlankExercise";
import TransformExercise from "../components/grammar/TransformExercise";

export default function GrammarLesson() {
  const { id } = useParams();
  const lesson = grammarLessons.find((l) => l.id === id);
  const [activeTab, setActiveTab] = useState("read"); // "read" or "practice"
  const [currentSection, setCurrentSection] = useState(0);
  const practiceRef = useRef(null);

  if (!lesson) {
    return (
      <div className="not-found">
        <h2>Grammar lesson not found</h2>
        <Link to="/lessons">Back to lessons</Link>
      </div>
    );
  }

  const sections = lesson.sections;
  const section = sections[currentSection];

  const goToSection = (index) => {
    setCurrentSection(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderSection = (sec) => {
    switch (sec.type) {
      case "explanation":
        return <ExplanationSection key={sec.id} section={sec} />;
      case "conjugation-table":
        return <ConjugationTableSection key={sec.id} section={sec} />;
      default:
        return <ExplanationSection key={sec.id} section={sec} />;
    }
  };

  const renderExercise = (exercise) => {
    switch (exercise.type) {
      case "multiple-choice":
        return <MultipleChoiceExercise key={exercise.id} exercise={exercise} />;
      case "matching":
        return <MatchingExercise key={exercise.id} exercise={exercise} />;
      case "fill-in-the-blank":
        return <FillInBlankExercise key={exercise.id} exercise={exercise} />;
      case "transform":
        return <TransformExercise key={exercise.id} exercise={exercise} />;
      default:
        return null;
    }
  };

  return (
    <div className="grammar-lesson-page">
      <div className="grammar-header">
        <Link to="/lessons" className="back-link">
          <ChevronLeft size={20} /> Lessons
        </Link>
        <h1>{lesson.title}</h1>
        <p className="grammar-subtitle">{lesson.subtitle}</p>
      </div>

      {/* Tab toggle: Read vs Practice */}
      <div className="grammar-tabs">
        <button
          className={`grammar-tab ${activeTab === "read" ? "active" : ""}`}
          onClick={() => setActiveTab("read")}
        >
          <BookOpen size={18} />
          Read & Learn
        </button>
        <button
          className={`grammar-tab ${activeTab === "practice" ? "active" : ""}`}
          onClick={() => setActiveTab("practice")}
        >
          <Gamepad2 size={18} />
          Practice
        </button>
      </div>

      {activeTab === "read" ? (
        <div className="grammar-read-view">
          {/* Section navigation sidebar */}
          <nav className="section-nav">
            <span className="section-nav-label">Sections</span>
            {sections.map((sec, i) => (
              <button
                key={sec.id}
                className={`section-nav-item ${i === currentSection ? "active" : ""}`}
                onClick={() => goToSection(i)}
              >
                <span className="section-nav-number">{i + 1}</span>
                <span className="section-nav-title">{sec.title}</span>
              </button>
            ))}
          </nav>

          {/* Main content */}
          <div className="grammar-content">
            {renderSection(section)}

            {/* Section navigation buttons */}
            <div className="section-nav-buttons">
              <button
                onClick={() => goToSection(currentSection - 1)}
                disabled={currentSection === 0}
                className="btn btn-nav"
              >
                <ChevronLeft size={18} /> Previous
              </button>
              <span className="section-counter">
                {currentSection + 1} / {sections.length}
              </span>
              {currentSection < sections.length - 1 ? (
                <button
                  onClick={() => goToSection(currentSection + 1)}
                  className="btn btn-nav btn-primary"
                >
                  Next <ChevronRight size={18} />
                </button>
              ) : (
                <button
                  onClick={() => { setActiveTab("practice"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="btn btn-nav btn-primary"
                >
                  <Gamepad2 size={18} /> Start Practice
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="grammar-practice-view" ref={practiceRef}>
          <div className="practice-intro">
            <Lightbulb size={20} />
            <p>Test your understanding with these interactive exercises. Go back to "Read & Learn" anytime to review.</p>
          </div>
          {lesson.exercises.map((exercise) => (
            <div key={exercise.id} className="exercise-block">
              {renderExercise(exercise)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
