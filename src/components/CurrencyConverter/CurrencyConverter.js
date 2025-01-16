import React, { useState, useContext } from "react";
import { TextField, Button, MenuItem, Select, Box } from "@mui/material";
import { getExchangeRate } from "../../services/currencyService"; 
import { useAuth  } from "../../hooks/useAuth";

export const CurrencyConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [convertedValue, setConvertedValue] = useState("");
  const [exchangeRate, setExchangeRate] = useState("");
  const { isLoggedIn } = useAuth();

  const handleInputChange = (event) => {
    const value = event.target.value;

    // Allow only positive decimal numbers
    if (/^\d*\.?\d*$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleConvert = async () => {
    try {
      const data = await getExchangeRate(parseFloat(inputValue), "AUD", "USD");
      console.log(data);
      setConvertedValue(data.value.toFixed(4));
    } catch (error) {
      alert("An error occurred while converting currency. Please try again.");
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: 4, flexWrap: "wrap", gap: 2 }}>
      {/* Input TextBox */}
      <TextField
        label="Enter Amount"
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
        sx={{ width: "150px" }}
      />

      {/* Dropdown: From Currency */}
      <Select value="AUD" disabled sx={{ width: "100px" }}>
        <MenuItem value="AUD">AUD</MenuItem>
      </Select>

      {/* Convert Button */}
      <Button variant="contained" color="primary" onClick={handleConvert} disabled={!isLoggedIn}>
        {isLoggedIn ? "Convert" : "Login to Convert"}
      </Button>

      {/* Converted Value Display */}
      <TextField
        label="Converted Value"
        variant="outlined"
        value={convertedValue}
        slotProps={{
          readOnly: true,
        }}
        sx={{ width: "150px" }}
      />

      {/* Dropdown: To Currency */}
      <Select value="USD" disabled sx={{ width: "100px" }}>
        <MenuItem value="USD">USD</MenuItem>
      </Select>

     
    </Box>
  );
};