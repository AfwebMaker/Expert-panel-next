import { dynamicApiCall } from "../dynamicApiCall";
import { register_kg_local } from '../APIRepositories'
//function
import getCookie from '@/src/functions/getCookie'

const stepInformation = async (data) => {
    const option = {
        axios: register_kg_local,
        method: 'GET',
        endpoint: `/auth/expert/info/${getCookie('guid')}/${data}`,
    }

    const response = await dynamicApiCall(option)
    try {
        return response
    } catch (error) {
        throw response
    }
};

export default stepInformation;