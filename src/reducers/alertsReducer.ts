import _ from 'lodash';
import {    
    DATA_LOAD_ERROR,
    DATA_LOAD_START,
    LOAD_ALERT_GROUP_DETAILS_SUCCESS,    
    LOAD_ALERT_GROUP_PRESETS,    
    LOAD_ALERT_GROUP_SUCCESS, 
    SET_ALERT_GROUP_PRESET
    } from './../constants';

const initialState = {
    alertGroupDetails:[],
    alertGroupPresets:[],
    alertGroupSet:[],
    error:false,
    loading:false, 
}

export const alertsReducer = (state = initialState, action)=>{
    if(!action){
        return state;
    }
    switch(action.type){
        case DATA_LOAD_START:
            if(action.alertGroup){
                return {
                    ...state,
                    loading:true
                }
            }
            else {
                return state;
            }
        case LOAD_ALERT_GROUP_SUCCESS:
            return {
                ...state,
                alertGroupSet:action.data
            }
        case LOAD_ALERT_GROUP_DETAILS_SUCCESS:
            const newState = _.cloneDeep(state);
            const item = newState.alertGroupDetails.find(d=> d.GroupTile === action.GroupTile);
            if(item){
                item.values = action.data
            }
            else {
                newState.alertGroupDetails.push({GroupTile:action.GroupTile, values:action.data})
            }
            return newState;
        case LOAD_ALERT_GROUP_PRESETS:
            return {...state};
        case DATA_LOAD_ERROR:
            if(action.newFeeds){
                return {
                    ...state,
                    error:true, loading:false, 
                }    
            }
            else {
                return state
            };
        case SET_ALERT_GROUP_PRESET:
            console.log('***********************',action)
            return {...state};
        default:
            return state;
    }
}

export default alertsReducer;