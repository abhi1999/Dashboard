import * as MainActions from "./../actions/mainAction"
import {  
    DATA_LOAD_ERROR,
    DATA_LOAD_START,
    LOAD_ALERT_GROUP_DETAILS_SUCCESS,    
    LOAD_ALERT_GROUP_SUCCESS,
    LOAD_DOC_RECEIVED_COUNT,
    LOAD_EXCEPTION_BY_PROCESS_LOGS,
    LOAD_NEWS_FEED_SUCCESS,
} from './../constants';
import {AlertGroupSet, DocReceivedCount, TopErrorLog} from "./MockData";

export const loadAlertGroupSet = () => (dispatch, getState)=> {
    dispatch(loadAlertGroupSetSuccess(AlertGroupSet.value));
};

export const loadTopErrorLogs = () => (dispatch, getState)=> {
    dispatch(loadTopErrorLogsSuccess(TopErrorLog.value));
};

export const loadDocReceivedCount = () => (dispatch, getState)=> {
    dispatch(loadDocReceivedCountSuccess(DocReceivedCount.value));
};

export default {...MainActions, loadAlertGroupSet, loadTopErrorLogs, loadDocReceivedCount}




const loadAlertGroupSetSuccess = (data:any) => {
    return {
        data, 
        type: LOAD_ALERT_GROUP_SUCCESS
    };
};
const loadDocReceivedCountSuccess = (data:any) => {
    return {
        data, 
        type: LOAD_DOC_RECEIVED_COUNT
    };
};
const loadTopErrorLogsSuccess = (data:any) => {
    return {
        data, 
        type: LOAD_EXCEPTION_BY_PROCESS_LOGS
    };
};
const loadAlertDetailsSuccess = (data:any, GroupTile) => {
    return {
        GroupTile,
        data, 
        type: LOAD_ALERT_GROUP_DETAILS_SUCCESS
    };
};