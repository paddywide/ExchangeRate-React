import axios from "axios";

const API_URL = "https://localhost:7274/api/Auth";
const getToken = () => {
    return localStorage.getItem("authToken"); 
  };

  const saveToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  export const login = async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/login`, credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const token = response.data.token;
      saveToken(token);
  
      return response.data; 
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data; 
  } catch (error) {
    console.error("Registration failed:", error);
    throw error; 
  }
};

export const logout = async (email ) => {
    try {
      const response = await axios.post(
        `${API_URL}/logout`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`, 
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  };