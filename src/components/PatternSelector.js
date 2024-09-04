import React from "react";
import "./PatternSelector.css";

function PatternSelector({ patterns, selectedPattern, onPatternChange }) {
  return (
    <div className="pattern-selector">
      {patterns.map((pattern) => (
        <button
          key={pattern}
          className={`pattern-button ${
            selectedPattern === pattern ? "active" : ""
          }`}
          onClick={() => onPatternChange(pattern)}
        >
          {pattern}
        </button>
      ))}
    </div>
  );
}

export default PatternSelector;
