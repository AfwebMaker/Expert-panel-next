import { dynamicApiCall } from "../dynamicApiCall";
import { ticketRequestAPI } from '../APIRepositories'

export const fetchNewMessages = async (data) => {
    const option = {
        axios: ticketRequestAPI,
        method: 'GET',
        endpoint: '/album',
        data: data,
    }

    const response = await dynamicApiCall(option)

    if (response.status === 200) {
        return response
    } else {
        throw response
    }
};