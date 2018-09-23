import axios from 'axios';
import buildQuery from "odata-query";
import ApplyAuthenticationBehavior from "./axiosBehavior/authentication";
import { IWindow } from '../constants/IWindow';
import mockBehavior from './axiosBehavior/mock';
// OData query parameters are only sometimes used, and should not be appended to every call
// This causes problems for other axios calls (post, put, delete) because it interferes with the second parameter being applied to the body
/*
axios.defaults.paramsSerializer = (params):string=>{ 
    const query = buildQuery(params).substring(1); // Strip question mark. Axios adds one already.
    return query;
}
*/

//
// encodeURIComponenet doesn't escape astericks...
//
export function FixURIComponent(param : string) : string {
    return encodeURIComponent(param).replace('*','%2a').replace("'","'')");
}

// Adding the params serializer back for odata queries
axios.interceptors.request.use( async (config)=> {
    if(config && config.method === "get" && config.url && config.url.indexOf('odata')>-1){
        config.paramsSerializer = (params):string=>{ 
            const query = buildQuery(params).substring(1); // Strip question mark. Axios adds one already.
            return query;
        }
    }
    return config;
}, (error) =>{
    return Promise.reject(error);
});

// if(process.env.NODE_ENV !== 'production') {
       mockBehavior(axios)
// }

// This Axios instance does not flow through the axios interceptors so only to be used by the axiosBehavior code
export const axiosRoot = axios.create({
    baseURL : ((window as any).env as IWindow).VP4API_URL,
    timeout : ((window as any).env as IWindow).API_TIMEOUT_MINUTES * 60 * 1000
});



// This Axios instance points to the Scheduler API
export const axiosSched = axios.create({
    baseURL : ((window as any).env as IWindow).WSAPI_URL,
    timeout : ((window as any).env as IWindow).API_TIMEOUT_MINUTES * 60 * 1000
});



// Intecept all the Responses and format the error response
axiosSched.interceptors.response.use( (response)=> {
    // Normal response
    return response;
}, 
(error) =>{
    if (error.message === "Network Error") {
        // HTTP 404, 500 or others
        return Promise.reject(new Error(error.config.url + "; " + error.message));
    } else {
        // Some other sort of error
        try
        {
            if (error.response.data.error === undefined) {
                if (error.response.data.Message !== undefined) {
                    return Promise.reject(new Error(error.request.responseURL + "; " + error.response.data.Message));
                }
                else {
                    return Promise.reject(new Error(error.request.responseURL + "; " + error.response.data));
                }
            }
            else {
                try
                {
                    if (error.response.data.error.innererror.message !== undefined) {
                        return Promise.reject(new Error(error.request.responseURL + "; " + error.response.data.error.innererror.message));
                    } else {
                        return Promise.reject(new Error(error.request.responseURL + "; " + error.response.data.error.message));
                    }
                }
                catch {
                    return Promise.reject(error);
                }
            }
        }
        catch {
            return Promise.reject(error);
        }
    }
});



// This Axios instance points to the Scheduler API
export const axiosTLE = axios.create({
    baseURL : ((window as any).env as IWindow).TLEAPI_URL,
    timeout : ((window as any).env as IWindow).API_TIMEOUT_MINUTES * 60 * 1000
});

// Intecept all the Responses and format the error response
axiosTLE.interceptors.response.use( (response)=> {
    // Normal response
    return response;
}, 
(error) =>{
    if (error.message === "Network Error") {
        // HTTP 404, 500 or others
        return Promise.reject(new Error(error.config.url + "; " + error.message));
    } else {
        try
        {
            if (error.response.data.error === undefined) {
                if (error.response.data.Message !== undefined) {
                    return Promise.reject(new Error(error.request.responseURL + "; " + error.response.data.Message));
                }
                else {
                    return Promise.reject(new Error(error.request.responseURL + "; " + error.response.data));
                }
            }
            else {
                try
                {
                    if (error.response.data.error.innererror.message !== undefined) {
                        return Promise.reject(new Error(error.request.responseURL + "; " + error.response.data.error.innererror.message));
                    } else {
                        return Promise.reject(new Error(error.request.responseURL + "; " + error.response.data.error.message));
                    }
                }
                catch {
                    return Promise.reject(error);
                }
            }
        }
        catch {
            return Promise.reject(error);
        }
    }
});


ApplyAuthenticationBehavior(axios)

export default axios;