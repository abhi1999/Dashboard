import * as MainActions from "./../actions/mainAction"
import {  
    LOAD_ALERT_GROUP_DETAILS_SUCCESS,    
    LOAD_ALERT_GROUP_SUCCESS,
    LOAD_DATA, 
    LOAD_DOC_RECEIVED_COUNT,
    LOAD_ERROR,
    LOAD_NEWS_FEED_SUCCESS,
    LOAD_TOP_ERROR_LOGS,
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
        type: LOAD_TOP_ERROR_LOGS
    };
};
const loadAlertDetailsSuccess = (data:any, GroupTile) => {
    return {
        GroupTile,
        data, 
        type: LOAD_ALERT_GROUP_DETAILS_SUCCESS
    };
};