import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:8080/", // localhost
  baseURL: "http://52.78.37.112/", // api ec2 ip
  headers: {
    "content-type": "application/json"
  },
  timeout: 3000,
  withCredentials: true
});

export default api;
