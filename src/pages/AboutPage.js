import React from "react";
import { Box, Typography } from "@mui/material";

const AboutPage = () => {


  return (
    <Box sx={{ padding: "16px" }}>
      <Typography 
        variant="h5" 
        component="h2"
        sx={{
          fontSize: { xs: '1.5rem', sm: '2rem' }, 
          fontWeight: 'bold', 
          textAlign: 'center', 
          color: 'primary.main', 
        }}
      >
        This is an empty page.
      </Typography>
    </Box>
  );
};

export default AboutPage;