import { dynamicApiCall } from "../dynamicApiCall";
import { ticketRequestAPI } from '../APIRepositories'

export const sendMessage = async (data) => {
    const option = {
        axios: ticketRequestAPI,
        method: 'POST',
        endpoint: '/users',
        data: data,
    }

    const response = await dynamicApiCall(option)

    if (response.status === 200) {
        return response
    } else {
        throw response
    }
};