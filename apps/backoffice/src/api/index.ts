import axios, { AxiosInstance } from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const troveedApi: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json'
    }
});