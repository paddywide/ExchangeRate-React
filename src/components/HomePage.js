import React from "react";
import { Typography, Box } from "@mui/material";

export const HomePage = () => (
  <Box sx={{ padding: "16px" }}>
    <Typography variant="h4" gutterBottom>
      Welcome to the Home Page!
    </Typography>
    <Typography>
      This is the content of the homepage. Log in to access personalized features.
    </Typography>
  </Box>
);
