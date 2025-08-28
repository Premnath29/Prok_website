import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function InnovationHub() {
  return (
    <Box className="innovation-wrapper">
      <Box className="innovation-container">
        <Box className="breadcrumb">
          <span className="home-icon">🏠</span>
          <span className="breadcrumb-text">Innovation Hub</span>
        </Box>

        <Typography variant="h3" className="innovation-heading">
          Innovation Hub
        </Typography>

        <Typography variant="body1" className="innovation-subtext">
          Constantly improving and optimising, pushing forward to go further.
        </Typography>

        <Box className="filter-buttons">
          <Button className="btn-yellow">All Innovation</Button>
          <Button className="btn-outline">Articles</Button>
          <Button className="btn-outline">Projects</Button>
          <Button className="btn-outline">Products</Button>
          <Button className="btn-outline">Case Studies</Button>
        </Box>
      </Box>
    </Box>
  );
}
