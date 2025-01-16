import React from "react";
import { Header } from "./components/Header/Header";
import { HomePage } from "./components/HomePage";
import { AuthProvider } from "./hooks/useAuth";

const App = () => {
  return (
    <AuthProvider>
      <Header />
      <HomePage />
    </AuthProvider>
  );
};

export default App;
