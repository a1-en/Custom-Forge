import React, { useState } from "react";
import "./TextInput.css";

function TextInput({ text, onTextChange, maxLength = 20 }) {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const newText = e.target.value;

    if (newText.length > maxLength) {
      setError(`Maximum ${maxLength} characters allowed.`);
    } else {
      setError("");
      onTextChange(newText);
    }
  };

  return (
    <div className="text-input">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter custom text"
        maxLength={maxLength + 1}
      />
      <div className="character-counter">
        {text.length}/{maxLength}
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default TextInput;
