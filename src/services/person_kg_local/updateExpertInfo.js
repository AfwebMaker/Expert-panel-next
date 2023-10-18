import { dynamicApiCall } from "../dynamicApiCall";
import { person_kg_local } from '../APIRepositories'

const updateExpertInfo = async (data) => {
    const option = {
        axios: person_kg_local,
        method: 'POST',
        endpoint: '/ExpertInfo/UpdateExpertInfo/',
        data: data
    }

    const response = await dynamicApiCall(option)
    try {
        return response
    } catch (error) {
        throw response
    }
};

export default updateExpertInfo;