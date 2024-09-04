import React from "react";
import html2canvas from "html2canvas";
import "./ProductPreview.css";

function ProductPreview({
  selectedColor,
  selectedSize,
  customText,
  selectedPattern,
}) {
  const sizeStyles = {
    S: { width: "150px", height: "150px", fontSize: "14px" },
    M: { width: "200px", height: "200px", fontSize: "16px" },
    L: { width: "250px", height: "250px", fontSize: "18px" },
    XL: { width: "300px", height: "300px", fontSize: "20px" },
  };

  const selectedStyle = sizeStyles[selectedSize];

  const productStyle = {
    backgroundColor: selectedColor.toLowerCase(),
    width: selectedStyle.width,
    height: selectedStyle.height,
    margin: "20px auto",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: selectedStyle.fontSize,
    color: "#fff",
    position: "relative",
    backgroundImage:
      selectedPattern !== "None"
        ? `url(${process.env.PUBLIC_URL}/images/${selectedPattern
            .toLowerCase()
            .replace(" ", "-")}.png)`
        : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "all 0.3s ease-in-out",
  };

  const textStyle = {
    marginTop: "10px",
    fontSize: selectedStyle.fontSize,
    color: "#000",
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "5px",
    borderRadius: "5px",
    maxWidth: selectedStyle.width,
    margin: "10px auto",
  };

  const handleDownload = () => {
    const productElement = document.getElementById("product-with-text");

    html2canvas(productElement).then((canvas) => {
      const link = document.createElement("a");
      link.download = "custom-product.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  return (
    <div>
      <div id="product-with-text">
        <div style={productStyle}></div>
        {customText && <div style={textStyle}>{customText}</div>}
      </div>
      <button className="download-button" onClick={handleDownload}>
        Download Image
      </button>
    </div>
  );
}

export default ProductPreview;
