// src/App.js
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Navbar from "./components/Navbar";
import Customizer from "./components/Customizer";
import Footer from "./components/Footer";
import theme from "./components/theme"; // Import the custom theme
import "./App.css"; // Optional: Keep if you have global styles

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstarts an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
          <Customizer />
        </Container>

        {/* Footer */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
