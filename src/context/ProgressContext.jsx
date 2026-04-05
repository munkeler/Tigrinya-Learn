import { createContext, useContext, useState, useEffect } from "react";

const ProgressContext = createContext();

const STORAGE_KEY = "tigrinya-learn-progress";

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(loadProgress);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  // Mark a specific item in a lesson as learned
  const markItemLearned = (lessonId, itemIndex) => {
    setProgress((prev) => {
      const lessonProgress = prev[lessonId] || { learnedItems: [], quizScores: [] };
      const learnedItems = [...new Set([...lessonProgress.learnedItems, itemIndex])];
      return { ...prev, [lessonId]: { ...lessonProgress, learnedItems } };
    });
  };

  // Record a quiz score
  const recordQuizScore = (lessonId, score, total) => {
    setProgress((prev) => {
      const lessonProgress = prev[lessonId] || { learnedItems: [], quizScores: [] };
      const quizScores = [...lessonProgress.quizScores, { score, total, date: Date.now() }];
      return { ...prev, [lessonId]: { ...lessonProgress, quizScores } };
    });
  };

  // Get lesson completion percentage
  const getLessonProgress = (lessonId, totalItems) => {
    const lessonProgress = progress[lessonId];
    if (!lessonProgress) return 0;
    return Math.round((lessonProgress.learnedItems.length / totalItems) * 100);
  };

  // Get best quiz score for a lesson
  const getBestScore = (lessonId) => {
    const lessonProgress = progress[lessonId];
    if (!lessonProgress || lessonProgress.quizScores.length === 0) return null;
    return Math.max(...lessonProgress.quizScores.map((s) => Math.round((s.score / s.total) * 100)));
  };

  // Reset all progress
  const resetProgress = () => {
    setProgress({});
  };

  return (
    <ProgressContext.Provider
      value={{ progress, markItemLearned, recordQuizScore, getLessonProgress, getBestScore, resetProgress }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) throw new Error("useProgress must be used within ProgressProvider");
  return context;
}
