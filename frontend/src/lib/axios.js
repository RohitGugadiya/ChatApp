import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://buzztalk.site:5001/api", //import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});
