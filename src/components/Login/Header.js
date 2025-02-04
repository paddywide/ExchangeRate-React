import React, { useState } from "react";
import { IconButton, Typography, Box, Menu, MenuItem, Modal } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { LoginForm } from "./LoginForm";
import { useAuth  } from "../../hooks/useAuth";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoggedIn, username, handleLogin, handleLogout } = useAuth();
  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
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
          <IconButton onClick={handleMenuClick} color="primary" aria-label="account options">
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => { handleLogout(); handleMenuClose(); }}>
              Logout
            </MenuItem>
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
