import { dynamicApiCall } from "../dynamicApiCall";
import { category_kg_local } from '../APIRepositories'

const mainPageSearch = async (data) => {
    const option = {
        axios: category_kg_local,
        method: 'GET',
        endpoint: `/mainPage/Search?value=${data}`
    }

    const response = await dynamicApiCall(option)
    try {
        return response
    } catch (error) {
        throw response
    }
};

export default mainPageSearch;