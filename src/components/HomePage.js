import React from "react";
import { Box, Typography } from "@mui/material";
import { projectDescriptionContent } from "../content/ProjectDescription";
import { CurrencyConverter } from "./CurrencyConverter/CurrencyConverter"; 

export const HomePage = () => {
  const handleConversion = (convertedValue) => {
    console.log("Converted value:", convertedValue);
  };

  return (
    <Box sx={{ padding: "16px" }}>
      <Typography variant="h5" gutterBottom>
        Solution Overview
      </Typography>
      <Typography
        variant="body1"
        component="div"
        sx={{ whiteSpace: "pre-line", marginBottom: "16px" }}
      >
        {projectDescriptionContent}
      </Typography>

      <Box sx={{ marginTop: "32px" }}>
        <CurrencyConverter onConvert={handleConversion} />
      </Box>
    </Box>
  );
};
