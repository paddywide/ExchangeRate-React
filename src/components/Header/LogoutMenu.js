import React from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

export const LogoutMenu = ({ username, onLogout, anchorEl, onMenuClose }) => {
  return (
    <>
      <IconButton
        onClick={onMenuClose}
        color="primary"
        aria-label="account options"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={onMenuClose}
      >
        <MenuItem disabled>{username}</MenuItem>
        <MenuItem
          onClick={() => {
            onLogout();
            onMenuClose();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};
