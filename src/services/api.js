import axios from 'axios';

const api = axios.create({
    baseURL: "https://enigmatic-castle-48679.herokuapp.com",
});

export default api;