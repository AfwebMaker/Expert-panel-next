import { dynamicApiCall } from "../dynamicApiCall";
import { deputy_kg_local } from '../APIRepositories'

const cancel = async (data) => {
    const option = {
        axios: deputy_kg_local,
        method: 'POST',
        endpoint: `/EpertDeputy/Cancel/${data.nationalCode}`,
        data: data
    }

    const response = await dynamicApiCall(option)
    try {
        return response
    } catch (error) {
        throw response
    }
};

export default cancel;