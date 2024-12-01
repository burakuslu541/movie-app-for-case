import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.omdbapi.com",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(async (config) => {
  return config;
});

export default instance;
