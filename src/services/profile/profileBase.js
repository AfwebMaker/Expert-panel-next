import { dynamicApiCall } from "../dynamicApiCall";
import { personAPI } from '../APIRepositories'

const profileBase = async () => {
    const option = {
        axios: personAPI,
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