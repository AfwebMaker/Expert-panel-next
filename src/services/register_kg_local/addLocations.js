import { dynamicApiCall } from "../dynamicApiCall";
import { register_kg_local } from '../APIRepositories'

const addLocations = async (data) => {
    const option = {
        axios: register_kg_local,
        method: 'POST',
        endpoint: `/auth/expert/location/`,
        data: data
    }

    const response = await dynamicApiCall(option)
    try {
        return response
    } catch (error) {
        throw response
    }
};

export default addLocations;