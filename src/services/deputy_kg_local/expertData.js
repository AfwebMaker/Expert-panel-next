import { dynamicApiCall } from "../dynamicApiCall";
import { deputy_kg_local } from '../APIRepositories'

const expertData = async () => {
    const option = {
        axios: deputy_kg_local,
        method: 'GET',
        endpoint: '/EpertDeputy/GetExpertData'
    }

    const response = await dynamicApiCall(option)
    try {
        return response
    } catch (error) {
        throw response
    }
};

export default expertData;