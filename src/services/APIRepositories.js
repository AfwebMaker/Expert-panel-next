import axios from 'axios';

export const ticketRequestAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 20000,
    headers: {
        "Accept": "application/json"
    }
})

export const person_kg_local = axios.create({
    baseURL: process.env.NEXT_PUBLIC_person_kg_local,
    timeout: 20000,
    headers: {
        "Accept": "application/json"
    }
})

export const register_kg_local = axios.create({
    baseURL: process.env.NEXT_PUBLIC_register_kg_local,
    timeout: 20000,
    headers: {
        "Accept": "application/json"
    }
})