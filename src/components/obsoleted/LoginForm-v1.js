import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
  Link,
} from "@mui/material";

const LoginForm = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "visitor@localhost.com",
    password: "visitor",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const data = await login(credentials);
      console.log("Login successful:", data);
      navigate("/home");
    } catch (err) {
      setError("Invalid email or password.");
    }
  };

  const prefillVisitorCredentials = () => {
    setCredentials({ email: "visitor@localhost.com", password: "visitor" });
  };

  const prefillAdminCredentials = () => {
    setCredentials({ email: "admin@localhost.com", password: "admin" });
  };

  return (
    <Container maxWidth="xs">
      <Box mt={8} textAlign="center">
        <Typography variant="h4" gutterBottom>
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
          sx={{ mt: 2, textTransform: "none" }} 
        >
          Login
        </Button>
        {/* <Button
          fullWidth
          variant="outlined"
          color="secondary"
          onClick={prefillVisitorCredentials}
          sx={{
            mt: 2,
            textTransform: "none",
            backgroundColor: "green",
            color: "white",
            "&:hover": {
              backgroundColor: "darkgreen",
            },
          }}
        >
          Prefill Visitor Credential
        </Button>
        <Button
          fullWidth
          variant="outlined"
          color="secondary"
          onClick={prefillAdminCredentials}
          sx={{
            mt: 2,
            textTransform: "none",
            backgroundColor: "green",
            color: "white",
            "&:hover": {
              backgroundColor: "darkgreen",
            },
          }}
        >
          Prefill Admin Credential
        </Button> */}
        <Box mt={2}>
          <Link href="#" onClick={() => navigate("/recover-password")}>
            Forgot Password?
          </Link>
        </Box>
        <Box mt={1}>
          <Link href="#" onClick={() => navigate("/register")}>
            Create a new account
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
