import Notifications from 'react-notification-system-redux';
import { BASE_URL, SERVICES } from "./../configs/";
import axios from "./../configs/axios";
import {  
    ErroNotificationOptions,
    LOAD_DASHBOARD_MENU_ITEM_DETAILS,
    LOAD_DASHBOARD_MENU_LIST,
} from './../constants';
import {loadDataError, loadDataState} from "./mainAction"


export const loadDashboardMenuList = () => (dispatch, getState)=> {
    dispatch(loadDataState("businessProcess"));
    const orderBy = ["ShortcutOrder"]    
    const url = BASE_URL + SERVICES.endpoints.shortcutMenuItems;
    return axios.get(url, {params:{orderBy}})
                .then((response:any)=>{
                    dispatch(loadDashboardMenuItemListSuccess(response.data.value));
                    if(response.data.value){
                        response.data.value.forEach((element:any) => {
                            dispatch(loadDashboardMenuItemDetails(element.ShortCutID))
                        });
                    }
                })
                .catch((error)=>{
                    dispatch(loadDataError(error));
                    dispatch(Notifications.error({
                        ...ErroNotificationOptions,
                        message: url +" :: " + error.message
                    }));
                })
    
};
export const loadDashboardMenuItemDetails = (ShortCutID) => (dispatch, getState)=> {
    dispatch(loadDataState("businessProcess"));
    const filter = [{ShortCutID}]
    const url = BASE_URL + SERVICES.endpoints.shortcutMenuItemDetails;
    console.log('iamhere')
    return axios.get(url,{params:{filter}})
                .then((response:any)=>{
                    dispatch(loadDashboardMenuItemDetailsSuccess(response.data.value, ShortCutID));
                })
                .catch((error)=>{
                    dispatch(loadDataError(error));
                    dispatch(Notifications.error({
                        ...ErroNotificationOptions,
                        message: url +" :: " + error.message
                    }));
                })
    
};

const loadDashboardMenuItemListSuccess = (data:any) => {
    return {
        data, 
        type: LOAD_DASHBOARD_MENU_LIST
    };
};
const loadDashboardMenuItemDetailsSuccess = (data:any, ShortCutID) => {
    return {
        ShortCutID,
        data, 
        type: LOAD_DASHBOARD_MENU_ITEM_DETAILS
    };
};