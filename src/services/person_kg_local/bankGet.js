import { dynamicApiCall } from "../dynamicApiCall";
import { person_kg_local } from '../APIRepositories'

const bankGet = async () => {
    const option = {
        axios: person_kg_local,
        method: 'Get',
        endpoint: '/verify/bank/Get/',
    }

    const response = await dynamicApiCall(option)
    try {
        return response
    } catch (error) {
        throw response
    }
};

export default bankGet;