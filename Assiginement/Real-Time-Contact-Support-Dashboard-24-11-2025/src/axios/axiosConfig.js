import axios from "axios";
import { toast } from "react-toastify";

let activeRequests = 0;
let setLoaderGlobal;

export const registerLoaderSetter = (fn) => {
  setLoaderGlobal = fn;
};

const api = axios.create({
  baseURL: "http://localhost:3000",
});

api.interceptors.request.use(
  (config) => {
    activeRequests++;
    setLoaderGlobal(true);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    activeRequests--;
    if (activeRequests === 0) {
      setLoaderGlobal(false);
    }
    return response;
  },
  (error) => {
    activeRequests--;
    if (activeRequests === 0) {
      setLoaderGlobal(false);
    }
    toast.error(error?.response?.data?.message || "Something went wrong");
    return Promise.reject(error);
  }
);

export default api;
