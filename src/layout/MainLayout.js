import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import NavigationBar from "../components/NavigationBar";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

const MainLayout = () => {
  return (
    <Box>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Box>
  );
};

export default MainLayout;
