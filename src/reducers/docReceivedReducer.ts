import {    
    DATA_LOAD_ERROR, DATA_LOAD_START,
    LOAD_DOC_RECEIVED_COUNT
} from './../constants';

const initialState = {
    docReceivedByType:[],
    error:false,
    loading:false, 
}

export const docReceivedReducer = (state = initialState, action)=>{
    if(!action){
        return state;
    }
    switch(action.type){
        case DATA_LOAD_START:
            if(action[LOAD_DOC_RECEIVED_COUNT]){
                return {
                    ...state,
                    error:false,
                    loading:true
                }
            }
            else {
                return state;
            }
        case LOAD_DOC_RECEIVED_COUNT:
            return {
                ...state,
                docReceivedByType:action.data,
                loading:false,
            }
        case DATA_LOAD_ERROR:
            if(action[LOAD_DOC_RECEIVED_COUNT]){
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

export default docReceivedReducer;