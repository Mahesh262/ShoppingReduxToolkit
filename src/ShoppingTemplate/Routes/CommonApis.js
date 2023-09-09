// apiService.js
import axios from "axios";

const baseURL = "https://fakestoreapi.com";

const apiService = axios.create({
  baseURL,
});

// Define your common API endpoints and functions here
const CommonApis = {
  getUsers: () => apiService.get("/products"),
  getCategories: () => apiService.get("/products/categories"),
  // searchProducts: (query) => apiService.get(`/products?search=${query}`),
  searchProducts: (query, category) => {
    // Construct the API URL with search query and category filter
    const url = `/products?search=${query}${
      category ? `&category=${category}` : ""
    }`;
    return apiService.get(url);
  },
  // Add more API functions here
};

export default CommonApis;
