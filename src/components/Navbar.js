import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#1976d2", // Customize the background color
        boxShadow: "none", // Remove shadow if desired
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1, // To push the brand to the left
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "bold",
            fontSize: "1.5rem", // Adjust the font size
            color: "#fff", // Customize the text color
          }}
        >
          CustomForge
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
