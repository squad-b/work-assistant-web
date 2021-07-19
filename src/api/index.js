import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "content-type": "application/json"
  },
  timeout: 3000,
  withCredentials: true
});

document.cookie = "SameSite=None; Secure"

export default api;
