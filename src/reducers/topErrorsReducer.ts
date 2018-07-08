import _ from 'lodash';
import {    
    LOAD_DATA, 
    LOAD_ERROR,
    LOAD_TOP_ERROR_LOGS
} from './../constants';

const initialState = {
    error:false,
    loading:false, 
    topErrors:[]
}

export const topErrorsReducer = (state = initialState, action)=>{
    if(!action){
        return state;
    }
    switch(action.type){
        case LOAD_DATA:
            if(action.topErrors){
                return {
                    ...state,
                    loading:true
                }
            }
            else {
                return state;
            }
        case LOAD_TOP_ERROR_LOGS:
            return {
                ...state,
                topErrors:action.data
            }
        case LOAD_ERROR:
            if(action.topErrors){
                return {
                    ...state,
                    error:true, loading:false, 
                }    
            }
            else {
                return state
            };
        default:
            return state;
    }
}

export default topErrorsReducer;