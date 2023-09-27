import { dynamicApiCall } from "../dynamicApiCall";
import { ticketRequestAPI } from '../APIRepositories'

const sendMessage = async (data) => {
    const option = {
        axios: ticketRequestAPI,
        method: 'POST',
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

export default sendMessage;