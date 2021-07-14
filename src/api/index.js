import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:8080/", // localhost
  baseURL: "http://ec2-52-78-37-112.ap-northeast-2.compute.amazonaws.com/", // api ec2 DNS
  headers: {
    "content-type": "application/json"
  },
  timeout: 3000,
  withCredentials: true
});

document.cookie = "SameSite=None; Secure"

export default api;
