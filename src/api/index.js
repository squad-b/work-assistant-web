import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "content-type": "application/json"
  },
  timeout: 3000
});

export default api;
