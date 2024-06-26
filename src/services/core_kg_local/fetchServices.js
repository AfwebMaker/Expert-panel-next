import { dynamicApiCall } from "../dynamicApiCall";
import { core_kg_local } from '../APIRepositories'

const fetchServices = async (pageIndex, pageSize, type, value) => {
    const option = {
        axios: core_kg_local,
        method: 'GET',
        endpoint: `/Expert/GetData/${pageIndex}/${pageSize}/${type}/${value}`,
    }

    try {
        const response = await dynamicApiCall(option)

        return response
    } catch (error) {
        throw error
    }
};

export default fetchServices;