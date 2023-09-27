import { dynamicApiCall } from "../dynamicApiCall";
import { ticketRequestAPI } from '../APIRepositories'

const fetchMessages = async (data) => {
    const option = {
        axios: ticketRequestAPI,
        method: 'GET',
        endpoint: '/users',
        data: data,
    }

    const response = await dynamicApiCall(option)
    try {
        return response
    } catch (error) {
        throw response
    }
};

export default fetchMessages;