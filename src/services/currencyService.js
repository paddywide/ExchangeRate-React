import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;


export const getExchangeRate = async (amount, inputCurrency, outputCurrancy) => {
  try {
    const response = await axios.post(`${API_URL}/api/ExchangeService`, {
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
