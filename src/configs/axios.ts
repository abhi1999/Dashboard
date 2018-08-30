import axios from "axios";
import buildQuery from "odata-query";
import ApplyAuthenticationBehavior from "./axiosBehavior/authentication";
import mockBehavior from "./axiosBehavior/mock";

// OData query parameters are only sometimes used, and should not be appended to every call
// This causes problems for other axios calls (post, put, delete) because it interferes with the second parameter being applied to the body
/*
axios.defaults.paramsSerializer = (params):string=>{ 
    const query = buildQuery(params).substring(1); // Strip question mark. Axios adds one already.
    return query;
}
*/
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

// ApplyAuthenticationBehavior(axios)

export default axios;