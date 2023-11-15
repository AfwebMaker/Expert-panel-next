import { dynamicApiCall } from "../dynamicApiCall";
import { category_kg_local } from '../APIRepositories'

const getJob = async () => {
    const option = {
        axios: category_kg_local,
        method: 'GET',
        endpoint: '/Job'
    }

    const response = await dynamicApiCall(option)
    try {
        return response
    } catch (error) {
        throw response
    }
};

export default getJob;