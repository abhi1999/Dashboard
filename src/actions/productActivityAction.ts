import Notifications from 'react-notification-system-redux';
import { SERVICES } from "./../configs/";
import axios from "../configs/axios";
import {  
    ErroNotificationOptions,
    LOAD_PRODUCT_ACTIVITY_SUMMARY,
} from './../constants';
import {loadDataError, loadDataState} from "./mainAction"

export const loadProductActivitySummary = () => (dispatch, getState)=> {
    dispatch(loadDataState(LOAD_PRODUCT_ACTIVITY_SUMMARY));
    const url = SERVICES.endpoints.productActivtySummary;
    return axios.get(url)
                .then((response:any)=>{
                    dispatch(loadProductActivitySummarySuccess(response.data.value));
                })
                .catch((error)=>{
                    dispatch(loadDataError(error, LOAD_PRODUCT_ACTIVITY_SUMMARY));
                    dispatch(Notifications.error({
                        ...ErroNotificationOptions,
                        message: error.message
                    }));
                })
};
const loadProductActivitySummarySuccess = (data:any) => {
    return {
        data, 
        type: LOAD_PRODUCT_ACTIVITY_SUMMARY
    };
};
