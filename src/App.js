import React, { useState } from "react";
import { HomePage } from "./components/HomePage";
import { LoginForm } from "./components/LoginForm";
import { IconButton, Typography, Box, Modal, Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { logout } from "./services/authService"; // Import the logout service

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLoginSuccess = (user) => {
    setUsername(user.email);
    setIsLoggedIn(true);
    setIsModalOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logout(); // Call the logout API
      setIsLoggedIn(false);
      setUsername("");
      setAnchorEl(null); // Close menu if open
    } catch (err) {
      console.error("Logout failed:", err);
      // Optionally display an error message
    }
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end", // Align items to the right
          alignItems: "center",
          padding: "16px",
          backgroundColor: "#f5f5f5",
          borderBottom: "1px solid #ddd",
        }}
      >
        {isLoggedIn ? (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body1" sx={{ mr: 2 }}>
              {username}
            </Typography>
            <IconButton
              onClick={handleMenuClick}
              color="primary"
              aria-label="account options"
            >
              <AccountCircle />
            </IconButton>
            {/* Dropdown Menu */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        ) : (
          <IconButton
            onClick={() => setIsModalOpen(true)}
            color="primary"
            aria-label="login"
          >
            <AccountCircle />
          </IconButton>
        )}
      </Box>

      {/* Home Page Content */}
      <HomePage />

      {/* Login Modal */}
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "8px",
          }}
        >
          <LoginForm onLoginSuccess={handleLoginSuccess} />
        </Box>
      </Modal>
    </Box>
  );
};

export default App;
