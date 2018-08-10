import axios from "axios";
import buildQuery from "odata-query";
import mockBehavior from "./axiosBehavior/mock";

axios.defaults.paramsSerializer = (params):string=>{ 
    return buildQuery(params).substring(1);
}

    mockBehavior(axios)


export default axios;