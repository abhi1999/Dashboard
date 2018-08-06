import axios from "axios";
import buildQuery from "odata-query";
<<<<<<< HEAD
import mockBehavior from "./axiosBehavior/mock";

axios.defaults.paramsSerializer = (params):string=>{ 
    return buildQuery(params).substring(1);
}

//if(process.env.NODE_ENV !== 'production') {
    mockBehavior(axios)
//}


=======
axios.defaults.paramsSerializer = (params):string=>{ 
    return buildQuery(params).substring(1);
}
>>>>>>> 38045a84843171c0e74fb30298d0ce2b412a791e
export default axios;