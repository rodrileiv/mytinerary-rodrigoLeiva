import axios from "axios";

export const server = axios.create({
    baseURL: "http://localhost:7000/api",
});