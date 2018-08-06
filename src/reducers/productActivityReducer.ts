import {    
    DATA_LOAD_ERROR, DATA_LOAD_START,
    LOAD_PRODUCT_ACTIVITY_SUMMARY
} from './../constants';

const initialState = {
    error:false,
    loading:false, 
    productActivitySummary:[],
}

export const productActivityReducer = (state = initialState, action)=>{
    if(!action){
        return state;
    }
    switch(action.type){
        case DATA_LOAD_START:
            if(action[LOAD_PRODUCT_ACTIVITY_SUMMARY]){
                return {
                    ...state,
                    error:false,
                    loading:true
                }
            }
            else {
                return state;
            }
        case LOAD_PRODUCT_ACTIVITY_SUMMARY:
            return {
                ...state,
                loading:false,
                productActivitySummary:action.data,
            }
        case DATA_LOAD_ERROR:
            if(action[LOAD_PRODUCT_ACTIVITY_SUMMARY]){
                return {
                    ...state,
                    error:true, 
                    loading:false, 
                }    
            }
            else {
                return state
            };
        default:
            return state;
    }
}
export default productActivityReducer;