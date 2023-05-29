import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.cnptia.embrapa.br/climapi/v1',
    data: {
        grant_type: 'password',
        username: 'Ch0kitu',
        password: '09260407!Gustavorosa',
    },
    headers: {
        Authorization: 'Bearer f3bfac9c-134b-3bac-9a04-d20a9bc2c317'
    },
})

export default api;