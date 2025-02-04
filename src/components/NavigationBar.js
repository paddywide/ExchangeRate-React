import React, { useState } from "react";
import { IconButton, Typography, Box, Menu, MenuItem, Modal } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { LoginForm } from "./Login/LoginForm";
import { useAuth } from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate

const NavigationBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoggedIn, username, handleLogin, handleLogout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "8px 16px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Display email to the left of the icon when logged in */}
      {isLoggedIn && (
        <Typography
          variant="body1"
          sx={{ marginRight: "8px", whiteSpace: "nowrap" }}
        >
          {username}
        </Typography>
      )}
      {/* Human icon always stays on the top right */}
      <IconButton
        onClick={handleMenuClick}
        color="primary"
        aria-label="account options"
      >
        <AccountCircle fontSize="large" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {isLoggedIn ? (
          <MenuItem
            onClick={() => {
              handleLogout();
              handleMenuClose();
            }}
          >
            Logout
          </MenuItem>
        ) : (
          <MenuItem
            onClick={() => {
              setIsModalOpen(true);
              handleMenuClose();
            }}
          >
            Login
          </MenuItem>
        )}
        {location.pathname !== "/" && (
          <MenuItem
            onClick={() => {
              navigate("/"); // Navigate to the home page
              handleMenuClose();
            }}
          >
            Home Page
          </MenuItem>
        )}
        {location.pathname !== "/about" && (
          <MenuItem
            onClick={() => {
              navigate("/about"); // Navigate to the about page
              handleMenuClose();
            }}
          >
            About
          </MenuItem>
        )}
      </Menu>

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
          <LoginForm
            onLoginSuccess={(user) => {
              handleLogin(user);
              setIsModalOpen(false);
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default NavigationBar;