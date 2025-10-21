// src/pages/Admin.js
import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Alert,
} from "@mui/material";

function Admin() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Try accessing a protected endpoint to validate login
      await axios.get("http://localhost:8080/services", {
        auth: {
          username: form.username,
          password: form.password,
        },
      });

      // ✅ Store credentials for future requests
      axios.defaults.auth = { username: form.username, password: form.password };
      setLoggedIn(true);
    } catch (err) {
      console.error("Login failed", err);
      setError("Invalid username or password");
    }
  };

  if (loggedIn) {
    // Redirect to dashboard once logged in
    window.location.href = "/dashboard";
  }

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Admin Login
        </Typography>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={form.username}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Admin;
