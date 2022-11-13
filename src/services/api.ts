import { useAuth } from "@/hooks";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 2000,
});

// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    const token = useAuth.getState().token;
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `${token.token_type} ${token.access_token}`,
      };
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default api;
