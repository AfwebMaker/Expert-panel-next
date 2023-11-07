import { dynamicApiCall } from "../dynamicApiCall";
import { category_kg_local } from '../APIRepositories'

const middle = async () => {
    const option = {
        axios: category_kg_local,
        method: 'GET',
        endpoint: '/mainPage/categories/middle'
    }

    const response = await dynamicApiCall(option)
    try {
        return response
    } catch (error) {
        throw response
    }
};

export default middle;