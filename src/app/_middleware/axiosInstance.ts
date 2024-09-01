import axios from "axios";

// created axios instance
const axiosInstance = axios.create({
  baseURL: "http://ec2-13-59-95-150.us-east-2.compute.amazonaws.com:3000",
  timeout: 1000,
  headers:  { 'Content-Type': 'application/json' }
})

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // steps to do before the request is sent to server
    const token = null;
    if(token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  },

  (error) => {
    return Promise.reject(error)
  }
)

export default axiosInstance;