import { dynamicApiCall } from "../dynamicApiCall";
import { register_kg_local } from '../APIRepositories'
//function
import getCookie from '/src/functions/getCookie'

const confirm = async () => {
    const option = {
        axios: register_kg_local,
        method: 'POST',
        endpoint: `/auth/expert/confirm/${getCookie('guid')}/`,
    }

    const response = await dynamicApiCall(option)
    try {
        return response
    } catch (error) {
        throw response
    }
};

export default confirm;