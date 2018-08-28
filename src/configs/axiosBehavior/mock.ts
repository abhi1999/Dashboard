import mockAPIReponse from "./../../__mocks__/mockUrlResponse";
declare const window:any

export const applyMock = (axios)=>{
    if(process.env.REACT_APP_MOCK_ALL_SERVICE_CALLS === "true"){
        axios.interceptors.request.use( (config)=> {
            const mock = mockAPIReponse.find(r=> {
                const mockParams = r.params === undefined ? "":r.params;
                const requestParams = config.paramsSerializer? config.paramsSerializer(config.params):JSON.stringify(config.params);
                
                return r.url === config.url && (requestParams === undefined || mockParams  === requestParams);
            })
            if(mock){
                console.log('mockresponse')
                return Promise.reject({message:"MockResponse", data:mock.data, config})
            }
            else {
                if(window.req === undefined) {window.req=[];}
                window.req.push({url:config.url, params:config.paramsSerializer? config.paramsSerializer(config.params):JSON.stringify(config.params), config})
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
            window.AllRequests.push({data:response.data, url:response.config.url, params, response})
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