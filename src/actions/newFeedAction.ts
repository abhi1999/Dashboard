import axios from "axios";
import Notifications from 'react-notification-system-redux';
import { RSS_FEED_URL, RSS_PARSER } from "./../configs/"
import {  
    ErroNotificationOptions,
    LOAD_NEWS_FEED_SUCCESS,
} from './../constants';
import {loadDataError, loadDataState} from "./mainAction"

export const loadNewsFeed = () => (dispatch, getState)=> {
    dispatch(loadDataState("newFeeds"));
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
                        ...ErroNotificationOptions,
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
