import Notifications from 'react-notification-system-redux';
import { SERVICES } from "./../configs/";
import axios from "./../configs/axios";
import {  
    DATA_LOAD_ERROR,
    DATA_LOAD_START,
    ErroNotificationOptions,
} from './../constants';

export const testNotification = (msg:string) => (dispatch, getState) => {
    dispatch(Notifications.error({
        ...ErroNotificationOptions,
        message: msg
    }));
}


export const loadDataState = (type?) => {
    const action =  {
        type: DATA_LOAD_START
    };
    if(type) {action[type]=true;}
    return action
};
export const loadDataError = (error, type?) => {
    const action = {
        error,
        type: DATA_LOAD_ERROR
    };
    if(type) {action[type]=true;}
    return action
};
