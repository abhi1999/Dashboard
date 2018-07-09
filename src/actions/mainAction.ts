import axios from "axios";
import buildQuery from "odata-query";
import Notifications from 'react-notification-system-redux';
import { BASE_URL, RSS_FEED_URL, RSS_PARSER, SERVICES } from "./../configs/"
import {  
    LOAD_ALERT_GROUP_DETAILS_SUCCESS,    
    LOAD_ALERT_GROUP_SUCCESS,
    LOAD_DATA, 
    LOAD_DOC_RECEIVED_COUNT,
    LOAD_ERROR,
    LOAD_NEWS_FEED_SUCCESS,
    LOAD_TOP_ERROR_LOGS,
} from './../constants';


axios.defaults.paramsSerializer = (params):string=>{ 
    return buildQuery(params).substring(1);
}
const erroNotificationOptions = {
    autoDismiss: 10,
    message: '',
    position: 'br',
    title: 'Service Error'
};

export const testNotification = (msg:string) => (dispatch, getState) => {
    dispatch(Notifications.error({
        ...erroNotificationOptions,
        message: msg
    }));
}
export const loadNewsFeed = () => (dispatch, getState)=> {
    dispatch(loadDataState());
    const url = RSS_FEED_URL;
    return axios.get(url)
                .then((response)=>{
                    RSS_PARSER.parseString(response.data).then((data)=>{
                        dispatch(loadNewsFeedSuccess(data));
                    })
                    dispatch(Notifications.success({
                        message: "News Feed was sucessfully loaded."
                    }));
                })
                .catch((error)=>{
                    dispatch(loadDataError(error));
                    dispatch(Notifications.error({
                        ...erroNotificationOptions,
                        message: url +" :: " + error.message
                    }));
                });
};
export const loadAlertGroupSet = () => (dispatch, getState)=> {
    dispatch(loadDataState());
    const url = BASE_URL + SERVICES.endpoints.alertGroupSet;
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
                    dispatch(loadDataError(error));
                    dispatch(Notifications.error({
                        ...erroNotificationOptions,
                        message: url +" :: " + error.message
                    }));
                })
    
};
export const loadAlertGroupDetails = (GroupTile) => (dispatch, getState)=> {
    dispatch(loadDataState());
    const filter = [{GroupTile}]
    const url = BASE_URL + SERVICES.endpoints.alertSet;
    return axios.get(url,{params:{filter}})
                .then((response:any)=>{
                    dispatch(loadAlertDetailsSuccess(response.data.value, GroupTile));
                })
                .catch((error)=>{
                    dispatch(loadDataError(error));
                    dispatch(Notifications.error({
                        ...erroNotificationOptions,
                        message: url +" :: " + error.message
                    }));
                })
    
};

export const loadDocReceivedCount = () => (dispatch, getState)=> {
    dispatch(loadDataState());
    const url = BASE_URL + SERVICES.endpoints.docReceivedCount;
    return axios.get(url)
                .then((response:any)=>{
                    dispatch(loadDocReceivedCountSuccess(response.data.value));
                })
                .catch((error)=>{
                    dispatch(loadDataError(error));
                    dispatch(Notifications.error({
                        ...erroNotificationOptions,
                        message: url +" :: " + error.message
                    }));
                })
};


export const loadTopErrorLogs = () => (dispatch, getState)=> {
    dispatch(loadDataState());
    const url = BASE_URL + SERVICES.endpoints.errorLog;
    return axios.get(url)
                .then((response:any)=>{
                    dispatch(loadTopErrorLogsSuccess(response.data.value));
                })
                .catch((error)=>{
                    dispatch(loadDataError(error));
                    dispatch(Notifications.error({
                        ...erroNotificationOptions,
                        message: url +" :: " + error.message
                    }));
                })
};

const loadDataState = () => {
    return {
        type: LOAD_DATA
    };
};
const loadDataError = (error) => {
    return {
        error,
        type: LOAD_ERROR
    };
};
const loadNewsFeedSuccess = (data:any) => {
    return {
        data, 
        type: LOAD_NEWS_FEED_SUCCESS
    };
};
const loadAlertGroupSetSuccess = (data:any) => {
    return {
        data, 
        type: LOAD_ALERT_GROUP_SUCCESS
    };
};
const loadDocReceivedCountSuccess = (data:any) => {
    return {
        data, 
        type: LOAD_DOC_RECEIVED_COUNT
    };
};
const loadTopErrorLogsSuccess = (data:any) => {
    return {
        data, 
        type: LOAD_TOP_ERROR_LOGS
    };
};
const loadAlertDetailsSuccess = (data:any, GroupTile) => {
    return {
        GroupTile,
        data, 
        type: LOAD_ALERT_GROUP_DETAILS_SUCCESS
    };
};