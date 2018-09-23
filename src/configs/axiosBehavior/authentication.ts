import { axiosRoot } from '../axios';
import { axClientKey, axUsername, axCompanyID } from '../../constants/index';
import { SERVICES } from '../../configs/index';
import { IWindow } from '../../constants/IWindow';

export const ApplyAuthenticationBehavior =(axiosMain)=>{

    // Intercept all Request messages to see if we're still logged in
    axiosMain.interceptors.request.use(async (config)=> {
        console.info(config.method + ": " + config.url);
        ((window as any).env as IWindow).LastURL = config.url;
        if (!isAuthenticated) {
            const retVal = await launchLogin(config);  // Hang here until login and connect completes
        }

        // Apply our current key to every request
        config.headers.common[axClientKey] = sessionStorage.getItem(axClientKey);
        config.timeout = ((window as any).env as IWindow).API_TIMEOUT_MINUTES * 60 * 1000;
        config.baseURL = ((window as any).env as IWindow).VP4API_URL;

        return config;
    }, 
    (error) => {
        console.error('HTTP Status ' + error.request.Status);
        return Promise.reject(error);
    });


    // Intecept all the Responses and deal with the ClientKey going out of scope due to IIS reset
    axiosMain.interceptors.response.use( (response)=> {
        // Normal response
        return response;
    }, 
    async (error) =>{
        if (error.message === "Network Error") {
            // HTTP 404, 500 or others
            return Promise.reject(new Error(error.config.url + "; " + error.message));
        }

        // Some other sort of error, see if Bad Request and Not Authorized
        if (error.message.indexOf('timeout') >= 0) {
            // API call timed out and the error object has no useful info, sigh...
            // .LastURL may be the request that timed-out but not guarenteed if multiple requests were queued
            return Promise.reject(new Error(((window as any).env as IWindow).LastURL + '; ' + error.message)); 
        }

        try {
            if (error.response.status === 400) {
                // Bad Request
                if (error.response.data.error.message.includes('ot authorized')) {
                    console.warn('Getting new client key');
                    // Get a new ClientKey and retry the initial request
                    const newRetVal = await retryRequest(error);
                    console.warn('Got new client key');
                    return Promise.resolve(newRetVal);
                }
            }
        }
        catch { 
            // Ignore this and check below
        }  

        try
        {
            if (error.response.data.error === undefined) {
                if (error.response.data.Message !== undefined) {
                    return Promise.reject(new Error(error.request.responseURL + "; " + error.response.data.Message));
                }
                else {
                    if (error.response.data.length !== 0) {
                    return Promise.reject(new Error(error.request.responseURL + "; " + error.response.data));
                    } else {
                        return Promise.reject(new Error(error.request.responseURL + "; " + error.response.statusText));
                    }
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
    });
}

// Get a new ClientKey and retry the original request that was rejected
const retryRequest = async (error) => {
    return new Promise(r => {
            console.info("get: " + error.url);
            axiosRoot.get(SERVICES.endpoints.connectToApi + '/' + sessionStorage.getItem(axUsername) + '/' + sessionStorage.getItem(axCompanyID))
            .then((resp) => {
                sessionStorage.setItem(axClientKey, resp.data);

                // Update the rejected request with the new ClientKey
                error.config.headers[axClientKey] = resp.data;

                // Reissue the rejected request
                axiosRoot(error.config)
                    .then((resp1) => {
                        console.info('Resolving after re-issue ' + error.url);
                        r(resp1);
                    })
                });
    })
}


// Pause the Axios request processing until we have a username and company ID
let isLoginInProgress = false;
let isAuthenticated = true;
const promiseResolveArray:any[]=[];

const launchLogin = async (config)=>{
    if(isAuthenticated) {return Promise.resolve();}

    const retPromise = new Promise(r=>{
        promiseResolveArray.push({resolve:r, config})
    });
    
    if(!isLoginInProgress){
        isLoginInProgress=true;
        login(config);
    }
    console.log('queuing up promise', promiseResolveArray)
    return retPromise;
}

const login=async(config)=>{
    if (sessionStorage.getItem(axUsername) === null) {
        // Simulate Login and Company screen responses
        sessionStorage.setItem(axUsername, 'Demo.User');
        sessionStorage.setItem(axCompanyID, ((window as any).env as IWindow).DEFAULT_TEST_COMPANY.toString());
        sessionStorage.removeItem(axClientKey);
    }

    return new Promise(r=>{
            
            const url = SERVICES.endpoints.connectToApi + '/' + sessionStorage.getItem(axUsername) + '/' + sessionStorage.getItem(axCompanyID);
            console.log("get: " + url);
            axiosRoot.get(url)
            .then((resp) => {
                // Save the new ClientKey in sessionStorage for subsequent sessions
                sessionStorage.setItem(axClientKey, resp.data);
                
                // Update the current Axios config with the new ClientKey value
                config.headers.common[axClientKey] = resp.data;

                // Complete login and resolve any outstanding requests
                console.log('login done- now resolving all promises');
                isLoginInProgress = false;
                isAuthenticated= true;

                while(promiseResolveArray.length > 0) {
                    const p = promiseResolveArray.shift();
                    console.log('resolving ', p.config.url)
                    p.resolve();
                }  
                r(true); // Resolve no problems
        })
        .catch((err) => {
            r(false);
        })
    })
}

export default ApplyAuthenticationBehavior;