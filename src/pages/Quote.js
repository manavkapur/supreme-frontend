import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  MenuItem,
  Alert
} from "@mui/material";

const Quote = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [alert, setAlert] = useState({ type: "", text: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    try {
      await axios.post("http://localhost:8080/quotes", form);
      setAlert({ type: "success", text: "Quote submitted successfully!" });
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else {
        setAlert({ type: "error", text: "Failed to submit quote." });
      }
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6, mb: 6 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom align="center" fontWeight="bold">
          Get a Quote
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" mb={3}>
          Fill out the form below and we’ll get back to you with a custom quote.
        </Typography>

        {alert.text && (
          <Alert severity={alert.type} sx={{ mb: 2 }}>
            {alert.text}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            margin="normal"
            required
            error={!!errors.name}
            helperText={errors.name}
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
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            select
            fullWidth
            label="Service"
            name="service"
            value={form.service}
            onChange={handleChange}
            margin="normal"
            required
            error={!!errors.service}
            helperText={errors.service}
          >
            <MenuItem value="Construction Site Fencing">Construction Site Fencing</MenuItem>
            <MenuItem value="Event Barrier">Event Barrier</MenuItem>
            <MenuItem value="Temporary Roadside Fencing">Temporary Roadside Fencing</MenuItem>
            <MenuItem value="Crowd Control Panels">Crowd Control Panels</MenuItem>
            <MenuItem value="Industrial Site Fencing">Industrial Site Fencing</MenuItem>
            <MenuItem value="Custom Mesh Panels">Custom Mesh Panels</MenuItem>
          </TextField>
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            value={form.message}
            onChange={handleChange}
            margin="normal"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{
              mt: 3,
              backgroundColor: "#1e3a8a",
              "&:hover": { backgroundColor: "#1d4ed8" }
            }}
          >
            Submit Quote
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Quote;
