import axios from "axios";

const config = {
  baseUrl: "http://localhost:8080/",
};

const searchBook = (query) => {
  return axios.get(`${config.baseUrl}books?query=${query}`);
}

export {
  searchBook
}