import axios from "axios";

const BASE_URL = "https://lnm-edustream-1.onrender.com/api/v1";  // Updated URL

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
