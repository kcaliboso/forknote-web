import axios from "axios";
import axiosConfig from "@/config/axios.config";

axios.defaults.baseURL = axiosConfig.baseURL;
axios.defaults.withCredentials = axiosConfig.withCredentials;
axios.defaults.headers.common["Content-Type"] = "application/json";

export default axios;
