import React, { createContext, useContext, useState } from "react";
import { logout } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
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

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
