import _ from 'lodash';
import {    
    LOAD_ALERT_GROUP_DETAILS_SUCCESS,        
    LOAD_ALERT_GROUP_SUCCESS, 
    LOAD_DATA, 
    LOAD_ERROR
    } from './../constants';

const initialState = {
    alertGroupDetails:[],
    alertGroupSet:[],
    error:false,
    loading:false, 
}

export const alertsReducer = (state = initialState, action)=>{
    if(!action){
        return state;
    }
    switch(action.type){
        case LOAD_DATA:
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
            const newState = _.clone(state);
            const item = newState.alertGroupDetails.find(d=> d.GroupTile === action.GroupTile);
            if(item){
                item.values = action.data
            }
            else {
                newState.alertGroupDetails.push({GroupTile:action.GroupTile, values:action.data})
            }
            return newState;
        case LOAD_ERROR:
            if(action.newFeeds){
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

export default alertsReducer;