import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.cnptia.embrapa.br/climapi/v1',
    data: {
        grant_type: 'password',
        username: 'Ch0kitu',
        password: '09260407!Gustavorosa',
    },
    headers: {
        Authorization: 'Bearer 18282284-5981-38c2-8b08-6d012e2e7f2d'
    },
})

export default api;