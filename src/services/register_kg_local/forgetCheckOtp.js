import { dynamicApiCall } from "../dynamicApiCall";
import { register_kg_local } from '../APIRepositories'

const forgetCheckOtp = async (data) => {
    const option = {
        axios: register_kg_local,
        method: 'GET',
        endpoint: `/forgot/check/${data.phoneNumber}/${data.otp}`,
    }

    const response = await dynamicApiCall(option)
    try {
        return response
    } catch (error) {
        throw response
    }
};

export default forgetCheckOtp;