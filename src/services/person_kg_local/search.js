import { dynamicApiCall } from "../dynamicApiCall";
import { person_kg_local } from '../APIRepositories'

const search = async (data) => {
    const option = {
        axios: person_kg_local,
        method: 'GET',
        endpoint: `/registration/Search/${data}`,
    }

    const response = await dynamicApiCall(option)
    try {
        return response
    } catch (error) {
        throw response
    }
};

export default search;