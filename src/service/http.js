import axios from "axios";
import { responseParser } from "../libs/api";

const baseUrl = process.env.REACT_APP_BASE_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

const http = axios.create({
  baseURL: baseUrl,
  params: {
    apiKey,
  },
});

http.interceptors.response.use(
  (response) => {
    return responseParser(response);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
