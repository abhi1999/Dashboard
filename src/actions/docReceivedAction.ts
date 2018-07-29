import Notifications from 'react-notification-system-redux';
import { BASE_URL, SERVICES } from "./../configs/";
import axios from "./../configs/axios";
import {  
    ErroNotificationOptions,
    LOAD_DOC_RECEIVED_COUNT,
} from './../constants';
import {loadDataError, loadDataState} from "./mainAction"

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
                        ...ErroNotificationOptions,
                        message: url +" :: " + error.message
                    }));
                })
};
const loadDocReceivedCountSuccess = (data:any) => {
    return {
        data, 
        type: LOAD_DOC_RECEIVED_COUNT
    };
};
