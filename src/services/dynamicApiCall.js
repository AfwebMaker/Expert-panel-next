//redux
// import {store} from "../features/store";
// import {logoutHandler} from "../features/authentication/auth";

// //toast
// import toast from 'react-hot-toast';

import customToast from '@/src/functions/customToast'

export const dynamicApiCall = async (options) => {
    try {
        const { method, endpoint, data, headers, axios } = options;
        let config = {
            url: endpoint,
            method: method,
            headers: headers
        }

        method === "GET" ? config.params = data : config.data = data
        return await axios(config);

    } catch (error) {
        // Handle error here or propagate it
        if (error.response.status === 500) {
            throw error
        } else if (error.response.status === 422) {
            throw error
        } else if (error.response.status === 401) {
            customToast('', 'salam mammad')
            // store.dispatch(logoutHandler())
            throw error
        } else {
            throw error;
        }
    }
};
