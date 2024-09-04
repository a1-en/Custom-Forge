import React from "react";
import "./SizeSelector.css";

function SizeSelector({ sizes, selectedSize, onSizeChange }) {
  return (
    <div className="size-selector">
      {sizes.map((size) => (
        <button
          key={size}
          className={`size-button ${selectedSize === size ? "active" : ""}`}
          onClick={() => onSizeChange(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
}

export default SizeSelector;
