import axios from "axios";

const api = axios.create({
  baseURL: "https://bethehero00.herokuapp.com",
});

export default api;
