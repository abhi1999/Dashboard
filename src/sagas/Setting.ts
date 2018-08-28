import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from "axios";
import { 
    GET_VERSION_INFO,
    GET_ERROR_INFO
} from './../constants/ActionTypes';
import { SCHEDULER_URL } from "./../configs/";
import { getVersionInfoSuccess, getVersionInfoFailure } from './../actions/Setting';
import { getErrorInfoSuccess, getErrorInfoFailure } from './../actions/Setting';
import Notifications from 'react-notification-system-redux';
import { ERROR_OPTIONS } from '../constants/ServiceParameters';

function* getVersionInfoRequest() {
    try {
        const versionInfo = yield call(getVersionInfoApi);
        const versionDisplay:string[] = [];

        versionDisplay.push(
            versionInfo.data.apiLibVer + " WorkflowScheduler_WebApi.dll",
            versionInfo.data.dataLibVer + " WorkflowScheduler_Data.dll Server",
            versionInfo.data.serviceExeVer + " swWorkflowService.exe",
            versionInfo.data.toolkitLibVer + " swToolkitC.dll",
            versionInfo.data.workflowLibVer + " swWorkflowLibraryC.dll",
            versionInfo.data.taskmsgExeVer + " swTaskMsg.exe",
            versionInfo.data.transformLibVer + " dms.Transformation_Library.dll"
        );
        console.log(versionDisplay.join(""));

        yield put(getVersionInfoSuccess(versionDisplay));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(getVersionInfoFailure(error));
    }
}

export const getVersionInfoApi = () => {

    const endpoint:string = SCHEDULER_URL + "/api/workflow/version";
    const url:string = endpoint;
    console.log("getVersionInfoApi: " + url);

    return axios.get(url);
};

function* getErrorInfoRequest() {
    try {
        const errorInfo = yield call(getErrorInfoApi);
        yield put(getErrorInfoSuccess(errorInfo.data));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(getErrorInfoFailure(error));
    }
}

export const getErrorInfoApi = () => {

    const endpoint:string = SCHEDULER_URL + "/api/workflow/service/events";
    const url:string = endpoint;
    console.log("getErrorInfoApi: " + url);

    return axios.get(url);
};


export default function* rootSaga() {
    yield all([
        takeLatest(GET_VERSION_INFO, getVersionInfoRequest),
        takeLatest(GET_ERROR_INFO, getErrorInfoRequest)
    ]);
}
