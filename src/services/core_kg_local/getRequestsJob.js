import { dynamicApiCall } from "../dynamicApiCall";
import { core_kg_local } from '../APIRepositories'

const getRequestsJob = async (data) => {
    const option = {
        axios: core_kg_local,
        method: 'GET',
        endpoint: `/SubmitARequest/GetRequestsJob/${data}`
    }

    const response = await dynamicApiCall(option)
    try {
        return response
    } catch (error) {
        throw response
    }
};

export default getRequestsJob;