import React from "react";
import Customizer from "./components/Customizer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Customizer />
      <Footer />
    </div>
  );
}

export default App;
