import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.cnptia.embrapa.br/climapi/v1',
    data: {
        grant_type: 'password',
        username: 'Ch0kitu',
        password: '09260407!Gustavorosa',
    },
    headers: {
        Authorization: 'Bearer b8e7cbe3-7a20-327e-aa5f-cc23d533b80a'
    },
})

export default api;