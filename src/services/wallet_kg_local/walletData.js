import { dynamicApiCall } from "../dynamicApiCall";
import { wallet_kg_local } from '../APIRepositories'

const oldNotification = async () => {
    const option = {
        axios: wallet_kg_local,
        method: 'GET',
        endpoint:'/client/WalletData/Get'
    }

    const response = await dynamicApiCall(option)
    try {
        return response
    } catch (error) {
        throw response
    }
};

export default oldNotification