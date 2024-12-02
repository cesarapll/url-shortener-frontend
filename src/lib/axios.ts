import axios, { InternalAxiosRequestConfig } from 'axios'

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 30000
})

axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        //add logic
        return config;
    },
    (error) => {
        //add logic
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        //add logic
        return response;
    },
    (error) => {
        //add logic
        return Promise.reject(error);
    }
)

export default axiosInstance;