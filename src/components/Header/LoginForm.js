import React, { useState } from "react";
import { login } from "../../services/authService";
import { Button, TextField, Typography, Box } from "@mui/material";

export const LoginForm = ({ onLoginSuccess }) => {
  const [credentials, setCredentials] = useState({
    email: "visitor@localhost.com",
    password: "visitor",
  });  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const user = await login(credentials);
      onLoginSuccess(user);
    } catch (err) {

      if (err.response && err.response.data) {
        const apiError = err.response.data;
        setError(`${apiError.status}, ${apiError.title}` || "An error occurred.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <Box>
      <Typography variant="h6" textAlign="center" gutterBottom>
        Login
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <TextField
        fullWidth
        margin="normal"
        label="Email"
        name="email"
        type="email"
        value={credentials.email}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Password"
        name="password"
        type="password"
        value={credentials.password}
        onChange={handleChange}
      />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleLogin}
        sx={{ mt: 2 }}
      >
        Login
      </Button>
    </Box>
  );
};
