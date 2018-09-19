import _ from "lodash";
import {     
    DATA_LOAD_ERROR,
    DATA_LOAD_START, 
} from './../constants';
import DebugNotify from '../utils/UIValidation';

const initialState = {
    loading:false, 
}

export const mainReducer = (state = initialState, action)=>{
    if(!action){
        return state;
    }
    switch(action.type) {
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

        case "RNS_SHOW_NOTIFICATION":
            // Intercept the notifications and stash them for later viewing
            DebugNotify(action.title, action.message);
            return state;

        default:
            return state;
    }
}

export default mainReducer;