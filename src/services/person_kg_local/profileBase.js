import { dynamicApiCall } from "../dynamicApiCall";
import { person_kg_local } from '../APIRepositories'

const profileBase = async () => {
    const option = {
        axios: person_kg_local,
        method: 'GET',
        endpoint: '/ExpertInfo/GetProfileBase/'
    }

    const response = await dynamicApiCall(option)
    try {
        return response
    } catch (error) {
        throw response
    }
};

export default profileBase;