//redux
// import {store} from "../features/store";
// import {logoutHandler} from "../features/authentication/auth";
// import customToast from '@/src/functions/customToast'
//functions
import getCookie from '@/src/functions/getCookie'
import toast from 'react-hot-toast';
import customToast from '../functions/customToast';

export const dynamicApiCall = async (options) => {
    try {
        const { method, endpoint, data, headers, axios } = options;
        let config = {
            url: endpoint,
            method: method,
            headers: headers
        }

        getCookie('TOKEN') && (axios.defaults.headers.common['Authorization'] = 'Bearer ' + getCookie('TOKEN'));
        method === "GET" ? config.params = data : config.data = data

        const res = await axios(config);
        if (res.status === 200) {
            res.data.message && customToast('success', res.data.message)
            return res
        } else {
            return res
        }

    } catch (error) {
        // Handle error here or propagate it
        if (error.response.status === 500) {
            toast.error('خطایی در ارتباط با سرور.')
            throw error
        } else if (error.response.status === 422) {
            toast.error('اطلاعات ارسالی صحیح نیست.')
            throw error
        } else if (error.response.status === 404) {
            throw error
        } else if (error.response.status === 401) {
            // store.dispatch(logoutHandler())
            throw error
        } else if (error.response.status === 400) {
            error.response.data.message && toast.error(error.response.data.message)
            throw error
        } else {
            throw error;
        }
    }
};
