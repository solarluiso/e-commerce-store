import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.mode === "development" ? "http://localhost:3000/api" : "/api", // Development and production base URL
  withCredentials: true, // Required to handle cookies
});

export default axiosInstance;
