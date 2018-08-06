import {    
    DATA_LOAD_ERROR, DATA_LOAD_START,
    LOAD_EXCEPTION_BY_PROCESS_LOGS
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
        case DATA_LOAD_START:
            if(action[LOAD_EXCEPTION_BY_PROCESS_LOGS]){
                return {
                    ...state,
                    error:false,
                    loading:true
                }
            }
            else {
                return state;
            }
        case LOAD_EXCEPTION_BY_PROCESS_LOGS:
            return {
                ...state,
                loading:false,
                topErrors:action.data
            }
        case DATA_LOAD_ERROR:
            if(action[LOAD_EXCEPTION_BY_PROCESS_LOGS]){
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

export default topErrorsReducer;