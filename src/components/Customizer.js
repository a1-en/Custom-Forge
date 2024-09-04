import React, { useState } from "react";
import OptionSelector from "./OptionSelector";
import SizeSelector from "./SizeSelector";
import TextInput from "./TextInput";
import PatternSelector from "./PatternSelector";
import ProductPreview from "./ProductPreview";
import "./Customizer.css";

function Customizer() {
  const [selectedColor, setSelectedColor] = useState("Red");
  const [selectedSize, setSelectedSize] = useState("M");
  const [customText, setCustomText] = useState("");
  const [selectedPattern, setSelectedPattern] = useState("None");

  const colors = [
    "Red",
    "Green",
    "Blue",
    "Yellow",
    "Orange",
    "Purple",
    "Pink",
    "Black",
    "White",
    "Gray",
    "Teal",
    "Navy",
  ];
  const sizes = ["S", "M", "L", "XL"];
  const patterns = [
    "None",
    "Stripes",
    "Polka Dots",
    "Plaid",
    "Chevron",
    "Floral",
    "Geometric",
    "Camouflage",
    "Abstract",
    "Argyle",
    "Tie-Dye",
    "Gingham",
    "Damask",
    "Brocade",
    "Quatrefoil",
  ];

  return (
    <div className="customizer">
      <h2>Customize Your Product</h2>

      <h3>Select a color:</h3>
      <OptionSelector
        options={colors}
        selectedOption={selectedColor}
        onOptionChange={setSelectedColor}
      />

      <h3>Select a size:</h3>
      <SizeSelector
        sizes={sizes}
        selectedSize={selectedSize}
        onSizeChange={setSelectedSize}
      />

      <h3>Enter custom text:</h3>
      <TextInput
        text={customText}
        onTextChange={setCustomText}
        maxLength={20}
      />

      <h3>Select a pattern:</h3>
      <PatternSelector
        patterns={patterns}
        selectedPattern={selectedPattern}
        onPatternChange={setSelectedPattern}
      />

      <ProductPreview
        selectedColor={selectedColor}
        selectedSize={selectedSize}
        customText={customText}
        selectedPattern={selectedPattern}
      />
    </div>
  );
}

export default Customizer;
