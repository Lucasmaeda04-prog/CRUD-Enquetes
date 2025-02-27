import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 20000,
    headers: {
        "Content-type": "application/json"
    }
})