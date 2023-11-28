import { dynamicApiCall } from "../dynamicApiCall";
import { wallet_kg_local } from '../APIRepositories'

const oldNotification = async (data) => {
    const option = {
        axios: wallet_kg_local,
        method: 'POST',
        endpoint: `/client/Transaction/Search`,
        data: data
    }

    const response = await dynamicApiCall(option)
    try {
        return response
    } catch (error) {
        throw response
    }
};

export default oldNotification