import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);