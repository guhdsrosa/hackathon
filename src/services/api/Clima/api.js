import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.cnptia.embrapa.br/climapi/v1',
    data: {
        grant_type: 'password',
        username: 'Ch0kitu',
        password: '09260407!Gustavorosa',
    },
    headers: {
        Authorization: 'Bearer e70b1a15-3dfe-3678-be8c-ea73db2694d0'
    },
})

export default api;