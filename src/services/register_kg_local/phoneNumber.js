import { dynamicApiCall } from "../dynamicApiCall";
import { register_kg_local } from '../APIRepositories'

const phoneNumber = async (data) => {
    const option = {
        axios: register_kg_local,
        method: 'GET',
        endpoint: `/auth/expert/${data}`,
    }

    const response = await dynamicApiCall(option)
    try {
        return response
    } catch (error) {
        throw response
    }
};

export default phoneNumber;