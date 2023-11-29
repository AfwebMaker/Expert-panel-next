import { dynamicApiCall } from "../dynamicApiCall";
import { department_kg_local } from '../APIRepositories'

const fetchDepartment = async () => {
    const option = {
        axios: department_kg_local,
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