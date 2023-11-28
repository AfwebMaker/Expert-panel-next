import { dynamicApiCall } from "../dynamicApiCall";
import { ticket_kg_local } from '../APIRepositories'

const fetchMessages = async (ticketId) => {
    const option = {
        axios: ticket_kg_local,
        method: 'GET',
        endpoint: `/Api/V1/User/Ticket/${ticketId}/Message`,
    }

    const response = await dynamicApiCall(option)
    try {
        return response
    } catch (error) {
        throw response
    }
};

export default fetchMessages;