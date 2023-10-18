import { dynamicApiCall } from "../dynamicApiCall";
import { person_kg_local } from '../APIRepositories'

const getExpertInfo = async () => {
    const option = {
        axios: person_kg_local,
        method: 'Get',
        endpoint: '/ExpertInfo/GetExpertInfo/',
    }

    const response = await dynamicApiCall(option)
    try {
        return response
    } catch (error) {
        throw response
    }
};

export default getExpertInfo;