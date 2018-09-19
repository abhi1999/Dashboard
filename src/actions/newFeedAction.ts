import axios from "../configs/axios";
import Notifications from 'react-notification-system-redux';
import { RSS_PARSER } from "./../configs/"
import { SERVICES } from "../configs"
import {  
    ErroNotificationOptions,
    LOAD_NEWS_FEED_SUCCESS,
} from './../constants';
import {loadDataError, loadDataState} from "./mainAction"

export const loadNewsFeed = () => (dispatch, getState)=> {

    dispatch(loadDataState(LOAD_NEWS_FEED_SUCCESS));
    return axios.get(SERVICES.endpoints.newsFeed)
                .then((response)=>{
                    RSS_PARSER.parseString(response.data).then((data)=>{
                        dispatch(loadNewsFeedSuccess(data));
                    })
                })
                .catch((error)=>{
                    dispatch(loadDataError(error, LOAD_NEWS_FEED_SUCCESS));
                    dispatch(Notifications.error({
                        ...ErroNotificationOptions,
                        message: error.message
                    }));
                });
};
const loadNewsFeedSuccess = (data:any) => {
    return {
        data, 
        type: LOAD_NEWS_FEED_SUCCESS
    };
};
