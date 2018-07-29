import Notifications from 'react-notification-system-redux';
import { BASE_URL, SERVICES } from "./../configs/";
import axios from "./../configs/axios";
import {  
    ErroNotificationOptions,
    LOAD_EXCEPTION_BY_PROCESS_LOGS,
} from './../constants';
import {loadDataError, loadDataState} from "./mainAction"

export const loadExceptionByProcessLogs = () => (dispatch, getState)=> {
    dispatch(loadDataState());
    const url = BASE_URL + SERVICES.endpoints.errorLog;
    return axios.get(url)
                .then((response:any)=>{
                    dispatch(loadExceptionByProcessLogsSuccess(response.data.value));
                })
                .catch((error)=>{
                    dispatch(loadDataError(error));
                    dispatch(Notifications.error({
                        ...ErroNotificationOptions,
                        message: url +" :: " + error.message
                    }));
                })
};

const loadExceptionByProcessLogsSuccess = (data:any) => {
    return {
        data, 
        type: LOAD_EXCEPTION_BY_PROCESS_LOGS
    };
};
