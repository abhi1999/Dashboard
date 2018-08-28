import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from "axios";
import { ERRORCODE_GET_ALL, ERRORCODE_ADD, ERRORCODE_UPDATE, ERRORCODE_DELETE } from '../constants/ActionTypes';
import { BASE_URL } from "../configs";
import { errorCodeGetAllSuccess, errorCodeGetAllFailure } from '../actions/ErrorCode';
import { errorCodeAddSuccess, errorCodeAddFailure } from '../actions/ErrorCode';
import { errorCodeUpdateSuccess, errorCodeUpdateFailure } from '../actions/ErrorCode';
import { errorCodeDeleteSuccess, errorCodeDeleteFailure } from '../actions/ErrorCode';
import Notifications from 'react-notification-system-redux';
import { ERROR_OPTIONS } from '../constants/ServiceParameters';
import buildQuery from "odata-query";
import { IErrorCode } from "../constants/edidb";

function* errorCodeGetAllRequest(action:any) {
    try {
        const errorCodeList:any[] = yield call(errorCodeGetAllApi, action);
        yield put(errorCodeGetAllSuccess(errorCodeList));
    } catch (error) {
        yield put(Notifications.error({ ...ERROR_OPTIONS,
            message: error.config.url
        }));
        yield put(errorCodeGetAllFailure(error));
    }
}

export const errorCodeGetAllApi = (action:any) => {

    const endpoint:string = BASE_URL + "/odata/ErrorCodeSet";
    const count:boolean = true;
    const top:string = action.payload.top;
    const skip:string = action.payload.skip;

    const orderBy:string[] = [];
    if (action.payload.sorted) {
        action.payload.sorted.map((s:any) => {
            const column:string = s.id + (s.desc ? " desc" : ""); 
            orderBy.push(column);
        });
    }

    const filter:string[] = [];
    if (action.payload.filtered) {
        action.payload.filtered.map((f:any) => {
            const column:string = "contains(" + f.id + ", '" + f.value + "')";
            filter.push(column);
        });
    }

    const oDataParams:string = buildQuery({
        count,
        top,
        skip,
        orderBy,
        filter
    });

    const url:string = endpoint + oDataParams; 

    console.log("errorCodeGetAllApi: " + url);
    return axios.get(url);
};

function* errorCodeAddRequest(action:any) {
    try {
        yield call(errorCodeAddApi, action);
        yield put(errorCodeAddSuccess(action.payload));
    } catch (error) {
        console.error(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS,
            message: error.config.url
        }));
        yield put(errorCodeAddFailure(error));
    }
}

export const errorCodeAddApi = (action:any) => {

    const errorCode:IErrorCode = action.payload;
    const url:string = BASE_URL + "/api/ErrorCode/Add/";

    console.log("errorCodeAddApi: " + url);
    return axios.post(url, errorCode);
};

function* errorCodeUpdateRequest(action:any) {
    try {
        yield call(errorCodeUpdateApi, action);
        yield put(errorCodeUpdateSuccess(action.payload));
    } catch (error) {
        console.error(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS,
            message: error.config.url
        }));
        yield put(errorCodeUpdateFailure(error));
    }
}

export const errorCodeUpdateApi = (action:any) => {

    const errorCode:IErrorCode = action.payload;
    const url:string = BASE_URL + "/api/ErrorCode/Update/" + errorCode.ErrCode;

    console.log("errorCodeUpdateApi: " + url);
    return axios.put(url, errorCode);
};

function* errorCodeDeleteRequest(action:any) {
    try {
        yield call(errorCodeDeleteApi, action);
        yield put(errorCodeDeleteSuccess(action.payload));
    } catch (error) {
        console.error(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS,
            message: error.config.url
        }));
        yield put(errorCodeDeleteFailure(error));
    }
}


export const errorCodeDeleteApi = (action:any) => {

    const errorCode:IErrorCode = action.payload;
    const url:string = BASE_URL + "/api/ErrorCode/Delete/" + errorCode.ErrCode;
    
    console.log("errorCodeDeleteApi: " + url);
    return axios.delete(url);
};

export default function* rootSaga() {
    yield all([
        takeLatest(ERRORCODE_GET_ALL, errorCodeGetAllRequest),
        takeLatest(ERRORCODE_ADD, errorCodeAddRequest),
        takeLatest(ERRORCODE_UPDATE, errorCodeUpdateRequest),
        takeLatest(ERRORCODE_DELETE, errorCodeDeleteRequest)
    ]);
}
