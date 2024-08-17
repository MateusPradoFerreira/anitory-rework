import axios from "axios";
import axiosRateLimit from "axios-rate-limit";

const axiosInstance = axios.create({
  baseURL: "https://api.jikan.moe/v4/",
});

export const api = axiosRateLimit(axiosInstance, { maxRequests: 1, perMilliseconds: 1000 });