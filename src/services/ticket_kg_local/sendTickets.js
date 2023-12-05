import { dynamicApiCall } from "../dynamicApiCall";
import { ticket_kg_local } from '../APIRepositories'

const sendTickets = async (data) => {
    const option = {
        axios: ticket_kg_local,
        method: 'POST',
        endpoint: `/Api/V1/User/Ticket`,
        data: data
    }

    const response = await dynamicApiCall(option)
    try {
        return response
    } catch (error) {
        throw response
    }
};

export default sendTickets;