import axios from "axios";

const api = axios.create({
    baseURL: 'https://unifenashackaton.herokuapp.com/api',
    headers: {
        Authorization: 'Bearer 1'
    },
})

export default api;