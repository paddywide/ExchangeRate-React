import React from "react";
import { Box, Typography } from "@mui/material";
import { CurrencyConverter } from "../components/CurrencyConverter/CurrencyConverter"; 
import ProjectDescriptionContent from "../content/ProjectDescription";

const HomePage = () => {
  const handleConversion = (convertedValue) => {
    console.log("Converted value:", convertedValue);
  };

  return (
    <Box sx={{ padding: "16px" }}>
      <Typography
        variant="body1"
        component="div"
        sx={{ whiteSpace: "pre-line", marginBottom: "16px" }}
      >
        <ProjectDescriptionContent />
      </Typography>

      <Box sx={{ marginTop: "32px" }}>
        <CurrencyConverter onConvert={handleConversion} />
      </Box>
    </Box>
  );
};

export default HomePage