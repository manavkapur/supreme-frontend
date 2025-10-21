// src/components/Footer.js
import React from "react";
import { Box, Container, Grid, Typography, Link as MuiLink, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#1976d2", color: "white", py: 4, mt: 6 }}>
      <Container>
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              SupremeSolutions
            </Typography>
            <Typography variant="body2">
              Providing secure, reliable, and affordable temporary fencing solutions across India.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <MuiLink href="/" color="inherit" underline="hover">Home</MuiLink><br />
              <MuiLink href="/services" color="inherit" underline="hover">Services</MuiLink><br />
              <MuiLink href="/about" color="inherit" underline="hover">About</MuiLink><br />
              <MuiLink href="/contact" color="inherit" underline="hover">Contact</MuiLink><br />
              <MuiLink href="/quote" color="inherit" underline="hover">Get a Quote</MuiLink>
            </Box>
          </Grid>

          {/* Contact & Social */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">Jalandhar, Punjab, India</Typography>
            <Typography variant="body2">Email: support@supremesolutions.com</Typography>
            <Typography variant="body2">Phone: +91 98765 43210</Typography>

            <Box mt={2}>
              <IconButton href="https://facebook.com" target="_blank" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" color="inherit">
                <Instagram />
              </IconButton>
              <IconButton href="https://linkedin.com" target="_blank" color="inherit">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom note */}
        <Box textAlign="center" mt={4}>
          <Typography variant="body2">
            © {new Date().getFullYear()} SupremeSolutions. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
