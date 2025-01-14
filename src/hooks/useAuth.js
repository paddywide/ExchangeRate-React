import { useState } from "react";
import { logout } from "../services/authService";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUsername(user.email);
  };

  const handleLogout = async () => {
    try {
      await logout(username);
      setIsLoggedIn(false);
      setUsername("");
    } catch (err) {
      console.error("Logout failed:", err);
      alert("An error occurred during logout. Please try again.");
    }
  };

  return { isLoggedIn, username, handleLogin, handleLogout };
};
