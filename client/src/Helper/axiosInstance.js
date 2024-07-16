import axios from "axios";

const BASE_URL = "https://lnm-edustream-1.onrender.com";  // Updated URL

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
