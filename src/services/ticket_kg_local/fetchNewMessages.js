import { dynamicApiCall } from "../dynamicApiCall";
import { ticketRequestAPI } from '../APIRepositories'

const fetchNewMessages = async (data) => {
    const option = {
        axios: ticketRequestAPI,
        method: 'GET',
        endpoint: '/album',
        data: data,
    }

    const response = await dynamicApiCall(option)
    try {
        return response
    } catch (error) {
        throw response
    }
};

export default fetchNewMessages;