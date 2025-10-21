// src/pages/Contact.js
import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Paper,
  Alert,
} from "@mui/material";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    try {
      await axios.post("http://localhost:8080/contact", form);
      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error submitting contact form", err);
      setError("Failed to send message. Please try again.");
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" paragraph>
        Have questions about our temporary fencing solutions? Fill out the form
        and our team will get back to you shortly.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {/* Contact Form */}
        <Grid item xs={12} md={7}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <form onSubmit={handleSubmit}>
              {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
              {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

              <TextField
                fullWidth
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                margin="normal"
                multiline
                rows={4}
                required
              />
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Send Message
              </Button>
            </form>
          </Paper>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} md={5}>
          <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
            <Typography variant="h6" gutterBottom>
              Get in Touch
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              SupremeSolutions Pvt Ltd  
              <br /> 35/2A Central Town, Jalandhar, Punjab  
              <br /> India
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              📞 +91 98765 43210  
              <br /> ✉️ support@supremesolutions.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Working Hours:  
              <br /> Mon – Sat: 9:00 AM – 6:00 PM
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
