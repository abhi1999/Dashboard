import axios from "axios";
import buildQuery from "odata-query";
axios.defaults.paramsSerializer = (params):string=>{ 
    return buildQuery(params).substring(1);
}
export default axios;