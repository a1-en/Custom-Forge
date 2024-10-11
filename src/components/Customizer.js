// Customizer.js
import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Paper,
  Box,
  Fade,
  Grow,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import OptionSelector from "./OptionSelector";
import SizeSelector from "./SizeSelector";
import TextInput from "./TextInput";
import PatternSelector from "./PatternSelector";
import ProductPreview from "./ProductPreview";
import LogoUploader from "./LogoUploader"; // Import the LogoUploader component

function Customizer() {
  const [selectedColor, setSelectedColor] = useState("Red");
  const [selectedSize, setSelectedSize] = useState("M");
  const [customText, setCustomText] = useState("");
  const [selectedPattern, setSelectedPattern] = useState("None");
  const [logo, setLogo] = useState(null); // State for the uploaded logo

  // Updated colors array with more colors
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
    "Brown",     // Added color
    "Cyan",      // Added color
    "Magenta",   // Added color
    "Olive",     // Added color
    "Lime",      // Added color
    "Maroon",    // Added color
    "Silver",    // Added color
    "Gold",      // Added color
  ];

  const sizes = ["S", "M", "L", "XL"];
  const patterns = ["None", "Stripes", "Polka Dots", "Plaid"];

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 4 }}
      >
        Customize Your Product
      </Typography>

      <Grid container spacing={4}>
        {/* Customization Options */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            {/* Color Selector */}
            <Grid item xs={12}>
              <Fade in timeout={1000}>
                <Paper elevation={3} sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Select a Color
                  </Typography>
                  <OptionSelector
                    options={colors}
                    selectedOption={selectedColor}
                    onOptionChange={setSelectedColor}
                  />
                </Paper>
              </Fade>
            </Grid>

            {/* Size Selector */}
            <Grid item xs={12}>
              <Grow in timeout={1200}>
                <Paper elevation={3} sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Select a Size
                  </Typography>
                  <SizeSelector
                    sizes={sizes}
                    selectedSize={selectedSize}
                    onSizeChange={setSelectedSize}
                  />
                </Paper>
              </Grow>
            </Grid>

            {/* Text Input */}
            <Grid item xs={12}>
              <Fade in timeout={1400}>
                <Paper elevation={3} sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Enter Custom Text
                  </Typography>
                  <TextInput
                    text={customText}
                    onTextChange={setCustomText}
                    maxLength={20}
                  />
                </Paper>
              </Fade>
            </Grid>

            {/* Pattern Selector */}
            <Grid item xs={12}>
              <Grow in timeout={1600}>
                <Paper elevation={3} sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Select a Pattern
                  </Typography>
                  <PatternSelector
                    patterns={patterns}
                    selectedPattern={selectedPattern}
                    onPatternChange={setSelectedPattern}
                  />
                </Paper>
              </Grow>
            </Grid>

            {/* Logo Uploader */}
            <Grid item xs={12}>
              <Grow in timeout={1800}>
                <Paper elevation={3} sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Logo Uploader
                  </Typography>
                  <LogoUploader onLogoChange={setLogo} /> {/* Pass the logo change handler */}
                </Paper>
              </Grow>
            </Grid>
          </Grid>
        </Grid>

        {/* Product Preview */}
        <Grid item xs={12} md={6}>
          <Grow in timeout={2000}>
            <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Product Preview
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <ProductPreview
                  selectedColor={selectedColor}
                  selectedSize={selectedSize}
                  customText={customText}
                  selectedPattern={selectedPattern}
                  logo={logo} // Pass the logo to the ProductPreview
                />
              </Box>
            </Paper>
          </Grow>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Customizer;
