import { dynamicApiCall } from "../dynamicApiCall";
import { notification_kg_local } from '../APIRepositories'

const oldNotification = async () => {
    const option = {
        axios: notification_kg_local,
        method: 'Get',
        endpoint: `/Api/V1/User/Notification/Old/`
    }

    const response = await dynamicApiCall(option)
    try {
        return response
    } catch (error) {
        throw response
    }
};

export default oldNotification;