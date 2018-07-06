import axios from "axios";
import _ from "lodash";
import buildQuery from "odata-query";
import Notifications from 'react-notification-system-redux';

import Parser from 'rss-parser';

import {AlertGroupSet, DocReceivedCount, TopErrorLog} from "./../__mocks__/MockData";

import {  
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
const parser = new Parser({customFields: {
    item: [
      ['content:encoded', 'contentEncoded'],
    ]
  }});
const RSS_FEED = "https://www.datamasons.com/customer-blog/rss.xml";
const BASE_URL = "http://192.168.104.125:5001";
const SERVICES ={
    endpoints:{
        addItem:"/api/ShipVia/Add/",
        deleteItem:"/api/ShipVia/Delete/",
        shipViaSet:"/odata/ShipViaSet",
        updateItem:"/api/ShipVia/Update/",
    }
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

export const loadNewsFeed = () => (dispatch, getState)=> {
    dispatch(loadDataState());
    const url = RSS_FEED;
    return axios.get(url)
                .then((response)=>{
                    console.log(response);
                    parser.parseString(response.data).then((data)=>{
                        console.log('feed data', data)
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
    dispatch(loadAlertGroupSetSuccess(AlertGroupSet.value));
};


export const loadDocReceivedCount = () => (dispatch, getState)=> {
    dispatch(loadDataState());
    dispatch(loadDocReceivedCountSuccess(AlertGroupSet.value));
};


export const loadTopErrorLogs = () => (dispatch, getState)=> {
    dispatch(loadDataState());
    dispatch(loadTopErrorLogsSuccess(AlertGroupSet.value));
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