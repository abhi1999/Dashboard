import axios from "axios";
import _ from "lodash";
import buildQuery from "odata-query";
import Notifications from 'react-notification-system-redux';

import Parser from 'rss-parser';

import {  
    LOAD_DATA, 
    LOAD_ERROR,
    LOAD_NEWS_FEED_SUCCESS,
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

const loadNewsFeedSuccess = (data:any) => {
    return {
        data, 
        type: LOAD_NEWS_FEED_SUCCESS
    };
};