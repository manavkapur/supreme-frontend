// src/components/Header.js
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Header({ isAdmin }) {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        {/* Logo / Brand */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          SupremeSolutions
        </Typography>

        {/* Nav Links */}
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/services">Services</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/gallery">Gallery</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
          <Button color="inherit" component={Link} to="/blog">Blog</Button>
          <Button color="inherit" component={Link} to="/quote">Get a Quote</Button>

          {/* Show admin/dashboard only if logged in */}
          {isAdmin && (
            <Button color="secondary" variant="contained" component={Link} to="/dashboard" sx={{ ml: 2 }}>
              Dashboard
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
