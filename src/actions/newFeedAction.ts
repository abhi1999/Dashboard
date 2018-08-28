import axios from "axios";
import Notifications from 'react-notification-system-redux';
import { RSS_FEED_URL, RSS_PARSER } from "./../configs/"
import {  
    ErroNotificationOptions,
    LOAD_NEWS_FEED_SUCCESS,
} from './../constants';
import {loadDataError, loadDataState} from "./mainAction"

export const loadNewsFeed = () => (dispatch, getState)=> {

    
    // axios.delete("http://localhost:9005/1", { foo: "bar" } );

    axios({
        method: 'DELETE',
        url: 'http://localhost:9005/3',
        data: {
            foo: "bar3"
        }
      }).then((data)=>{console.log(data)}).catch((e)=>{console.log('****yay capture the response text***',e.response);})


    dispatch(loadDataState(LOAD_NEWS_FEED_SUCCESS));
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
