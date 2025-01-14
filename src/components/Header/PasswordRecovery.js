import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
} from "@mui/material";

const PasswordRecovery = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleRecovery = () => {
    // Add password recovery logic here
    console.log("Password recovery email sent to:", email);
    navigate("/");
  };

  return (
    <Container maxWidth="xs">
      <Box mt={8} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Password Recovery
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleRecovery}
          sx={{ mt: 2 }}
        >
          Send Recovery Email
        </Button>
      </Box>
    </Container>
  );
};

export default PasswordRecovery;
