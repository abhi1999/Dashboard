import mockAPIReponse from "./../../__mocks__/mockUrlResponse";
// console.log('******', mockAPIReponse)
import uuid from 'uuid-v4';

declare const window:any

window.mockAPIReponse = mockAPIReponse
export const applyMock = (axios)=>{
    if(process.env.REACT_APP_MOCK_ALL_SERVICE_CALLS === "true" || true){
        axios.interceptors.request.use( (config)=> {
            const mock = mockAPIReponse.find(r=> {
                const mockParams = r.params === undefined ? "": r.params;
                const requestParams = config.paramsSerializer? config.paramsSerializer(config.params):JSON.stringify(config.params);
                return r.url === config.url && (requestParams === undefined || mockParams  === requestParams);
            })
            if(mock){
                console.log('mockresponse')
                return Promise.reject({message:"MockResponse", data:mock.data, config})
            }
            else {
                console.log('no mockresponse')
                if(window.req === undefined) {window.req=[];}
                config.otherParams = {url:config.url, params:config.paramsSerializer? config.paramsSerializer(config.params):JSON.stringify(config.params)}
                window.req.push({...config.otherParams})
            }
            return config;
        }, (error) =>{
            return Promise.reject(error);
        });
    
        axios.interceptors.response.use( (response)=> {
            if(window.AllRequests=== undefined){ // record requests that didnt go thru moc
                window.AllRequests =[]
            }
            const params = response.config.paramsSerializer? response.config.paramsSerializer(response.config.params):""
            let {otherParams} = response.config;
            if(otherParams === undefined){
                otherParams={}
            }
            window.AllRequests.push({data:response.data, url:otherParams.url, params:otherParams.params})
            return response;
        }, (error) =>{
            if(error && error.message==="MockResponse" && error.data){
                console.log('mock response')
                return Promise.resolve({data:error.data, status:200, config:error.config});
            }
        return Promise.reject(error);
        });
    }
}
export default applyMock;