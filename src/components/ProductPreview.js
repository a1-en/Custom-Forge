import React, { useState, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import html2canvas from "html2canvas";

function ProductPreview({ selectedColor, selectedSize, customText, selectedPattern, logo }) {
  const sizeStyles = {
    S: { width: 150, height: 150, fontSize: 18 },
    M: { width: 200, height: 200, fontSize: 22 },
    L: { width: 250, height: 250, fontSize: 24 },
    XL: { width: 300, height: 300, fontSize: 27 },
  };

  const selectedStyle = sizeStyles[selectedSize] || sizeStyles["M"];
  const patterns = {
    None: "none",
    Stripes: "url(#stripes)",
    "Polka Dots": "url(#polkaDots)",
    Plaid: "url(#plaid)",
  };

  // State for text and logo position
  const [textPosition, setTextPosition] = useState({ x: 100, y: 125 });
  const [logoPosition, setLogoPosition] = useState({ x: 75, y: 75 });
  const [isDragging, setIsDragging] = useState(false);
  const [draggingItem, setDraggingItem] = useState(null);
  const offsetRef = useRef({ x: 0, y: 0 }); // Offset for smooth dragging

  const handlePointerDown = (e, item) => {
    setIsDragging(true);
    setDraggingItem(item);
    
    // Calculate offset
    if (item === "logo") {
      offsetRef.current = {
        x: e.clientX - logoPosition.x,
        y: e.clientY - logoPosition.y,
      };
    } else {
      offsetRef.current = {
        x: e.clientX - textPosition.x,
        y: e.clientY - textPosition.y,
      };
    }
  };

  const handlePointerMove = (e) => {
    if (isDragging) {
      const newPosition = {
        x: e.clientX - offsetRef.current.x,
        y: e.clientY - offsetRef.current.y,
      };

      if (draggingItem === "logo") {
        setLogoPosition(newPosition);
      } else {
        setTextPosition(newPosition);
      }
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    setDraggingItem(null);
  };

  const handleDownload = () => {
    const element = document.getElementById("product-preview");
    html2canvas(element, { useCORS: true, scale: 2 }).then((canvas) => {
      const link = document.createElement("a");
      link.download = "custom-product.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: selectedStyle.width,
        height: selectedStyle.height + 60,
        margin: "20px auto",
        textAlign: "center",
      }}
    >
      <div
        id="product-preview"
        style={{ width: selectedStyle.width, margin: "0 auto" }}
      >
        <svg
          width={selectedStyle.width}
          height={selectedStyle.height}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ backgroundColor: selectedColor, borderRadius: "10px" }}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          <defs>
            <pattern
              id="stripes"
              patternTransform="rotate(45)"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <line x1="0" y1="0" x2="0" y2="10" stroke="#ffffff" strokeWidth="2" />
            </pattern>
            <pattern id="polkaDots" patternUnits="userSpaceOnUse" width="20" height="20">
              <circle cx="10" cy="10" r="5" fill="#ffffff" />
            </pattern>
            <pattern id="plaid" patternUnits="userSpaceOnUse" width="40" height="40">
              <rect width="20" height="40" fill="#ffffff" />
              <rect x="20" width="20" height="40" fill="#ffffff" />
              <rect width="40" height="20" fill="#ffffff" />
            </pattern>
          </defs>

          <rect x="50" y="50" width="100" height="100" fill={selectedColor} />

          {selectedPattern !== "None" && (
            <rect
              x="50"
              y="50"
              width="100"
              height="100"
              fill={patterns[selectedPattern]}
              opacity="0.5"
            />
          )}

          {customText && (
            <text
              x={textPosition.x}
              y={textPosition.y}
              textAnchor="middle"
              fontSize={selectedStyle.fontSize}
              fill="#000"
              dy=".3em"
              onPointerDown={(e) => handlePointerDown(e, "text")}
              style={{ cursor: "move" }}
            >
              {customText}
            </text>
          )}

          {logo && (
            <image
              href={logo}
              x={logoPosition.x}
              y={logoPosition.y}
              width="50" // Set the logo width
              height="50" // Set the logo height
              onPointerDown={(e) => handlePointerDown(e, "logo")}
              style={{ cursor: "move" }}
            />
          )}
        </svg>

        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            mt: 2,
            fontSize: selectedStyle.fontSize,
          }}
        >
          Size: {selectedSize}
        </Typography>
      </div>

      <Button variant="contained" onClick={handleDownload} sx={{ mt: 2 }}>
        Download Image
      </Button>
    </Box>
  );
}

export default ProductPreview;
