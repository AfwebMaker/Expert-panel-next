import { dynamicApiCall } from "../dynamicApiCall";
import { ticket_kg_local } from '../APIRepositories'

const sendMessage = async (data, ticketId) => {
    const option = {
        axios: ticket_kg_local,
        method: 'POST',
        endpoint: `/Api/V1/User/Ticket/${ticketId}/Message/New`,
        data: data
    }

    const response = await dynamicApiCall(option)
    try {
        return response
    } catch (error) {
        throw response
    }
};

export default sendMessage;