import React from "react";
import "./OptionSelector.css";

function OptionSelector({ options, selectedOption, onOptionChange }) {
  return (
    <div className="option-selector">
      {options.map((option) => (
        <button
          key={option}
          className={`option-button ${
            selectedOption === option ? "active" : ""
          }`}
          onClick={() => onOptionChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default OptionSelector;
