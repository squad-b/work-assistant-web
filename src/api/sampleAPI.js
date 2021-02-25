import axios from "axios";

const config = {
  baseUrl: "http://localhost:12345/",
};

export default () => {
  return {
    signup: (userInfo) => {
      return axios.post(`${config.baseUrl}auth/signup/`, userInfo);
    },
    login: (loginInfo) => {
      return axios.post(`${config.baseUrl}auth/login`, loginInfo);
    },
  };
};