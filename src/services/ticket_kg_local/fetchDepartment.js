import { dynamicApiCall } from "../dynamicApiCall";
import { ticket_kg_local } from '../APIRepositories'

const fetchDepartment = async () => {
    const option = {
        axios: ticket_kg_local,
        method: 'GET',
        endpoint: '/Api/V1/User/Ticket/Departments'
    }

    const response = await dynamicApiCall(option)
    try {
        return response
    } catch (error) {
        throw response
    }
};

export default fetchDepartment;