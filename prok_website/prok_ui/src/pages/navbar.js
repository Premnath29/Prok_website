import React from "react";
import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Adjust";

export default function PrimarySearchAppBar() {
  return (
    <AppBar position="fixed" className="navbar" sx={{ alignItems: "center" }}>
      <Toolbar
        className="navbar-toolbar"
        sx={{
          width: "100%",
          maxWidth: 1200,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box className="navbar-left" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box className="menu-circle">
            <MenuIcon fontSize="small" sx={{ color: "white" }} />
          </Box>
          <Typography variant="body1" sx={{ color: "white" }}>
            Menu
          </Typography>
        </Box>

        <Typography variant="h5" className="navbar-logo">
          PRO<span>K</span>
        </Typography>

        <Button className="get-started-btn">Get started</Button>
      </Toolbar>
    </AppBar>
  );
}
