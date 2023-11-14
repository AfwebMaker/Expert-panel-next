import axios from 'axios';

export const ticketRequestAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 20000,
    headers: {
        "Accept": "application/json"
    }
})

export const person_kg_local = axios.create({
    baseURL: process.env.NEXT_PUBLIC_PERSON_KG_LOCAL,
    timeout: 20000,
    headers: {
        "Accept": "application/json"
    }
})

export const register_kg_local = axios.create({
    baseURL: process.env.NEXT_PUBLIC_REGISTER_KG_LOCAL,
    timeout: 20000,
    headers: {
        "Accept": "application/json"
    }
})

export const deputy_kg_local = axios.create({
    baseURL: process.env.NEXT_PUBLIC_DEPUTY_KG_LOCAL,
    timeout: 20000,
    headers: {
        "Accept": "application/json"
    }
})

export const notification_kg_local = axios.create({
    baseURL: process.env.NEXT_PUBLIC_NOTIFICATION_KG_LOCAL,
    timeout: 20000,
    headers: {
        "Accept": "application/json"
    }
})

export const category_kg_local = axios.create({
    baseURL: process.env.NEXT_PUBLIC_CATEGORY_KG_LOCAL,
    timeout: 20000,
    headers: {
        "Accept": "application/json"
    }
})

export const ticket_kg_local = axios.create({
    baseURL: process.env.NEXT_PUBLIC_TICKET_KG_LOCAL,
    timeout: 20000,
    headers: {
        "Accept": "application/json"
    }
})

export const core_kg_local = axios.create({
    baseURL: process.env.NEXT_PUBLIC_CORE_KG_LOCAL,
    timeout: 20000,
    headers: {
        "Accept": "application/json"
    }
})