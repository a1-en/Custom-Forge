// LogoUploader.js
import React, { useState } from "react";
import "./LogoUploader.css";

function LogoUploader({ onLogoChange }) {
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        onLogoChange(reader.result); // Pass the image data URL to the parent
        setError(""); // Clear any errors
      };

      reader.onerror = () => {
        setError("Failed to read the file.");
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="logo-uploader">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        id="logo-upload"
        style={{ display: "none" }}
      />
      <label htmlFor="logo-upload" className="upload-label">
        Click or Drag to Upload Logo
      </label>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default LogoUploader;
