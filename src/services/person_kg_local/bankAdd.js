import { dynamicApiCall } from "../dynamicApiCall";
import { person_kg_local } from '../APIRepositories'

const bankAdd = async (data) => {
    const option = {
        axios: person_kg_local,
        method: 'POST',
        endpoint: '/verify/bank/add/',
        data: data
    }

    const response = await dynamicApiCall(option)
    try {
        return response
    } catch (error) {
        throw response
    }
};

export default bankAdd;