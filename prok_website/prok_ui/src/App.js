import React from "react";
import PrimarySearchAppBar from "./pages/navbar.js";
import InnovationHub from "./pages/InnovationHub.js"; 
import InnovationGrid from "./pages/InnovationGrid.js";
import FormField from "./pages/formField.js"
import Footer from "./pages/footer.js"
import Scroll from "./pages/scroll.js"

import { Box, Toolbar } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Box sx={{ backgroundColor: "#1e1e23", minHeight: "100vh", color: "white", position: "relative" }}>
      <PrimarySearchAppBar />
      <Toolbar /> 
      <InnovationHub />
      <InnovationGrid />
      <FormField />

      <Box sx={{ position: "fixed", bottom: 80, right: 20, zIndex: 2000 }}>
        <Scroll />
      </Box>

      <Footer />
    </Box>
  );
}

export default App;
