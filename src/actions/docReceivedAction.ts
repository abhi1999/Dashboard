import Notifications from 'react-notification-system-redux';
import { SERVICES } from "./../configs/";
import axios from "../configs/axios";
import {  
    ErroNotificationOptions,
    LOAD_DOC_RECEIVED_COUNT,
} from './../constants';
import {loadDataError, loadDataState} from "./mainAction"

export const loadDocReceivedCount = (fromDate) => (dispatch, getState)=> {
    dispatch(loadDataState(LOAD_DOC_RECEIVED_COUNT));
    const filter = [{fromDate}]
    const url = SERVICES.endpoints.docReceivedCount + "?fromDate=" + fromDate;
    return axios.get(url)
                .then((response:any)=>{
                    dispatch(loadDocReceivedCountSuccess(response.data.value));
                })
                .catch((error)=>{
                    dispatch(loadDataError(error, LOAD_DOC_RECEIVED_COUNT));
                    dispatch(Notifications.error({
                        ...ErroNotificationOptions,
                        message: error.message
                    }));
                })
};
const loadDocReceivedCountSuccess = (data:any) => {
    return {
        data, 
        type: LOAD_DOC_RECEIVED_COUNT
    };
};
