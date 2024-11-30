import axios from "axios";

interface IConfig {
  headers?: any;
  params?: any;
  data?: any;
}

const instance = axios.create({
  baseURL: "http://www.omdbapi.com/?apikey=ac872dcd",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(async (config) => {
  return config;
});

export default instance;
