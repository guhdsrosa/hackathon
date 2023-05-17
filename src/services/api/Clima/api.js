import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.cnptia.embrapa.br/climapi/v1',
    data: {
        grant_type: 'password',
        username: 'Ch0kitu',
        password: '09260407!Gustavorosa',
    },
    headers: {
        Authorization: 'Bearer 4ca3db1d-8d3b-3f2b-9aee-6cb0e1906dec'
    },
})

export default api;