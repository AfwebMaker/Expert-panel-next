import { dynamicApiCall } from "../dynamicApiCall";
import { deputy_kg_local } from '../APIRepositories'

const deActive = async (data) => {
    const option = {
        axios: deputy_kg_local,
        method: 'POST',
        endpoint: `/EpertDeputy/DeActive/${data.nationalCode}`,
        data: data
    }

    const response = await dynamicApiCall(option)
    try {
        return response
    } catch (error) {
        throw response
    }
};

export default deActive;