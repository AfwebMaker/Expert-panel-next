import axios from 'axios';

export const ticketRequestAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 20000,
    headers: {
        "Accept": "application/json"
    }
})

//test
export const personAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_PERSON,
    timeout: 20000,
    headers: {
        "Accept": "application/json"
    }
})