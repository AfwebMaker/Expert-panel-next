//redux
// import {store} from "../features/store";
// import {logoutHandler} from "../features/authentication/auth";


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
        if (error.response.status === 422) {
            throw error.response.data
        } else if (error.response.status === 401) {
            // store.dispatch(logoutHandler())
        } else {
            throw error;
        }
    }
};
