import React from "react";
import { Header } from "./components/Header/Header";
import { HomePage } from "./components/HomePage";
import { useAuth } from "./hooks/useAuth";

const App = () => {
  const { isLoggedIn, username, handleLogin, handleLogout } = useAuth();

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        username={username}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      <HomePage />
    </>
  );
};

export default App;
