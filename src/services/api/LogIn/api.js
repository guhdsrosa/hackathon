import axios from "axios";

const api = axios.create({
    baseURL: 'https://unifenashackaton.herokuapp.com/api',
    headers: {
        Authorization: 'Bearer 17c42a93-b044-455f-a4e2-3b1f23df1333'
    },
})

export default api;