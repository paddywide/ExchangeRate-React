import axios from "axios";

const API_URL = "https://localhost:7274/api/ExchangeService";


export const getExchangeRate = async (amount, inputCurrency, outputCurrancy) => {
  try {
    const response = await axios.post(`${API_URL}`, {
      amount,
      inputCurrency,
      outputCurrancy,
    });

    return response.data; 
  } catch (error) {
    console.error("Error fetching exchange rate:", error);
    throw error; 
  }
};
