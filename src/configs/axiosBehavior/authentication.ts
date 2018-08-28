import { resolve } from "url";

export const ApplyAuthenticationBehavior =(axios)=>{
    axios.interceptors.request.use( async (config)=> {
        console.log('in request incterceptor', config.url)
        const retVal = await launchLogin(config);// holdExecution();
        console.log('in request incterceptor after holding execution for login', performance.now())

        return config;
    }, (error) =>{
        return Promise.reject(error);
    });

    axios.interceptors.response.use( (response)=> {
        console.log('in response interceptor')
        return response;
    }, (error) =>{
        return Promise.reject(error);
    });
} 

let isLoginInProgress = false;
let isAuthenticated = false;
const promiseResolveArray:any[]=[];

const launchLogin= async (config)=>{
    if(isAuthenticated) {return Promise.resolve();}
    const retPromise = new Promise(r=>{
        promiseResolveArray.push({resolve:r, config})
    });
    if(!isLoginInProgress){
        isLoginInProgress=true;
        login();
    }
    console.log('queuing up promise', promiseResolveArray)
    return retPromise;
}

const login=async()=>{
    console.log('started login')
    return new Promise(r=>{
        setTimeout(()=>{
            console.log('login done- now resolving all promises')
            isLoginInProgress = false;
            isAuthenticated= true;
            while(promiseResolveArray.length>0){
                const p = promiseResolveArray.shift();
                console.log('resolving ', p.config.url)
                p.resolve();
            }  
            r(true)
        }, 10)
    })
}

export default ApplyAuthenticationBehavior;