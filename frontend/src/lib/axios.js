import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://buzztalk.site:5001/api"
      : "http://localhost:5001/api",
  withCredentials: true,
});
