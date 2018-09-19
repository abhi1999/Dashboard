import Notifications from 'react-notification-system-redux';
import { SERVICES } from "./../configs/";
import axios from "./../configs/axios";
import {  
    ErroNotificationOptions,
    LOAD_ALERT_GROUP_DETAILS_SUCCESS,
    LOAD_ALERT_GROUP_PRESETS,    
    LOAD_ALERT_GROUP_SUCCESS,
    SET_ALERT_GROUP_PRESET,
} from './../constants';
import {loadDataError, loadDataState} from "./mainAction"


export const loadAlertGroupSet = () => (dispatch, getState)=> {
    dispatch(loadDataState(LOAD_ALERT_GROUP_SUCCESS));
    const url = SERVICES.endpoints.alertGroupSet;
    return axios.get(url)
                .then((response:any)=>{
                    dispatch(loadAlertGroupSetSuccess(response.data.value));
                    if(response.data.value){
                        response.data.value.forEach((element:any) => {
                            dispatch(loadAlertGroupDetails(element.GroupTile))
                        });
                    }
                })
                .catch((error)=>{
                    dispatch(loadDataError(error, LOAD_ALERT_GROUP_SUCCESS));
                    dispatch(Notifications.error({
                        ...ErroNotificationOptions,
                        message:  error.message
                    }));
                })
    
};
export const loadAlertGroupDetails = (GroupTile) => (dispatch, getState)=> {
    dispatch(loadDataState(LOAD_ALERT_GROUP_DETAILS_SUCCESS));
    const filter = [{GroupTile}]
    const url = SERVICES.endpoints.alertSetDetails;
    return axios.get(url,{params:{filter}})
                .then((response:any)=>{
                    dispatch(loadAlertDetailsSuccess(response.data.value, GroupTile));
                })
                .catch((error)=>{
                    dispatch(loadDataError(error, LOAD_ALERT_GROUP_DETAILS_SUCCESS));
                    dispatch(Notifications.error({
                        ...ErroNotificationOptions,
                        message: error.message
                    }));
                })
    
};
export const setAlertPreset =(GroupTileId, preset)=>{
    return {
        alertGroupId:GroupTileId,
        preset,
        type:SET_ALERT_GROUP_PRESET,
    }
}
export const loadAlertPresets =(GroupTileId, preset)=>{
    return {
        type:LOAD_ALERT_GROUP_PRESETS,
    }
}

const loadAlertGroupSetSuccess = (data:any) => {
    return {
        data, 
        type: LOAD_ALERT_GROUP_SUCCESS
    };
};
const loadAlertDetailsSuccess = (data:any, GroupTile) => {
    return {
        GroupTile,
        data, 
        type: LOAD_ALERT_GROUP_DETAILS_SUCCESS
    };
};