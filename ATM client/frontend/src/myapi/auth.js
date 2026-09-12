import axios from "axios";
import Cookies from "js-cookie";

// Create an axios instance
const api = axios.create({
  baseURL: "http://localhost:3000", // Replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // For cookie-based authentication
});

// Token Setup: Get the token from cookies
const token = Cookies.get("token"); // Use js-cookie to get the token
if (token) {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
}

// Utility to handle errors
const handleError = (error) => {
  const message = error.response?.data?.error || error.message;
  return Promise.reject(message);
};

// Authentication APIs
export const login = async (username, password) => {
  try {
    const response = await api.post("/auth/login", { username, password });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const register = async (username, password) => {
  try {
    const response = await api.post("/auth/register", { username, password });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const logout = async () => {
  try {
    const response = await api.post("/auth/logout");
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

// Admin APIs
export const getUsers = async () => {
  try {
    const response = await api.get("/admin/users");
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const getTransactions = async () => {
  try {
    const response = await api.get("/admin/transactions");
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

// ATM Panel APIs
export const getBalance = async () => {
  try {
    const response = await api.get("/transaction/balance");
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const deposit = async (amount) => {
  try {
    const response = await api.post("/transaction/deposit", { amount });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const withdraw = async (amount) => {
  try {
    const response = await api.post("/transaction/withdraw", { amount });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const transfer = async (amount, recipientId) => {
  try {
    const response = await api.post("/transaction/transfer", { amount, recipientId });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

// Export the `api` instance for custom usage
export default api;
