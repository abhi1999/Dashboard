import axios from "axios";
import Notifications from 'react-notification-system-redux';
import { RSS_FEED_URL, RSS_PARSER } from "./../configs/"
import {  
    ErroNotificationOptions,
    LOAD_NEWS_FEED_SUCCESS,
} from './../constants';
import {loadDataError, loadDataState} from "./mainAction"

export const loadNewsFeed = () => (dispatch, getState)=> {

    dispatch(loadDataState(LOAD_NEWS_FEED_SUCCESS));
    const url = RSS_FEED_URL;
    return axios.get(url)
                .then((response)=>{
                     RSS_PARSER.parseString(response.data).then((data)=>{
                    // const data =[];  
                        dispatch(loadNewsFeedSuccess(data));
                     })
                })
                .catch((error)=>{
                    dispatch(loadDataError(error, LOAD_NEWS_FEED_SUCCESS));
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
