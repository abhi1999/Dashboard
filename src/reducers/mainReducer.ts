import _ from "lodash";
import {     
    DATA_LOAD_ERROR,
    DATA_LOAD_START, 
} from './../constants';

const initialState = {
    loading:false, 
}

export const mainReducer = (state = initialState, action)=>{
    if(!action){
        return state;
    }
        
    switch(action.type){
        case DATA_LOAD_START:
            return {
                ...state,
                loading:true
            }
        case DATA_LOAD_ERROR:
            return {
                ...state,
                loading:false
            }
        default:
            return state;
    }
}

export default mainReducer;