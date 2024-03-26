import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BACKEND;

export const axiosInstance = axios.create({ baseURL });
