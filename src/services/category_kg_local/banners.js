import { dynamicApiCall } from "../dynamicApiCall";
import { category_kg_local } from '../APIRepositories'

const banners = async () => {
    const option = {
        axios: category_kg_local,
        method: 'GET',
        endpoint: '/mainPage/MainPage_Banners'
    }

    const response = await dynamicApiCall(option)
    try {
        return response
    } catch (error) {
        throw response
    }
};

export default banners;