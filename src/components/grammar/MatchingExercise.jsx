import { useState, useMemo } from "react";
import { CheckCircle, RotateCcw } from "lucide-react";

function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function MatchingExercise({ exercise }) {
  const shuffledRight = useMemo(
    () => shuffleArray(exercise.pairs.map((p) => p.right)),
    [exercise.id]
  );

  const [selectedLeft, setSelectedLeft] = useState(null);
  const [matches, setMatches] = useState({}); // { leftIndex: rightValue }
  const [wrongPair, setWrongPair] = useState(null);
  const [finished, setFinished] = useState(false);

  const handleLeftClick = (index) => {
    if (matches[index] !== undefined) return;
    setSelectedLeft(index);
    setWrongPair(null);
  };

  const handleRightClick = (rightValue) => {
    if (selectedLeft === null) return;
    if (Object.values(matches).includes(rightValue)) return;

    const correctRight = exercise.pairs[selectedLeft].right;
    if (rightValue === correctRight) {
      const newMatches = { ...matches, [selectedLeft]: rightValue };
      setMatches(newMatches);
      setSelectedLeft(null);
      setWrongPair(null);
      if (Object.keys(newMatches).length === exercise.pairs.length) {
        setFinished(true);
      }
    } else {
      setWrongPair({ left: selectedLeft, right: rightValue });
      setTimeout(() => setWrongPair(null), 800);
    }
  };

  const restart = () => {
    setSelectedLeft(null);
    setMatches({});
    setWrongPair(null);
    setFinished(false);
  };

  const matchedRights = Object.values(matches);

  return (
    <div className="exercise-card">
      <h3 className="exercise-title">{exercise.title}</h3>
      <p className="exercise-instruction">{exercise.instruction}</p>

      {finished ? (
        <div className="exercise-result">
          <span className="exercise-score good">
            <CheckCircle size={16} /> All matched!
          </span>
          <button onClick={restart} className="btn btn-secondary btn-sm">
            <RotateCcw size={14} /> Play Again
          </button>
        </div>
      ) : (
        <div className="matching-grid">
          <div className="matching-column">
            {exercise.pairs.map((pair, i) => {
              let className = "matching-item left";
              if (matches[i] !== undefined) className += " matched";
              else if (selectedLeft === i) className += " selected";
              if (wrongPair && wrongPair.left === i) className += " wrong-flash";
              return (
                <button
                  key={i}
                  className={className}
                  onClick={() => handleLeftClick(i)}
                >
                  {pair.left}
                  {matches[i] !== undefined && <CheckCircle size={14} />}
                </button>
              );
            })}
          </div>
          <div className="matching-column">
            {shuffledRight.map((right, i) => {
              let className = "matching-item right";
              if (matchedRights.includes(right)) className += " matched";
              if (wrongPair && wrongPair.right === right) className += " wrong-flash";
              return (
                <button
                  key={i}
                  className={className}
                  onClick={() => handleRightClick(right)}
                  disabled={matchedRights.includes(right)}
                >
                  {right}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
