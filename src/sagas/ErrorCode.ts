import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from "../configs/axios";
import { ERRORCODE_GET_ALL, ERRORCODE_ADD, ERRORCODE_UPDATE, ERRORCODE_DELETE } from '../constants/ActionTypes';
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
            message: error.message
        }));
        yield put(errorCodeGetAllFailure(error));
    }
}

export const errorCodeGetAllApi = (action:any) => {

    const endpoint:string = "/odata/ErrorCodeSet";
    const count:boolean = true;
    const top:string = action.payload.top;
    const skip:string = action.payload.skip;

    console.log("PARAMS: " + count + " " + top + " " + skip);

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

    return axios.get(url);
};

function* errorCodeAddRequest(action:any) {
    try {
        yield call(errorCodeAddApi, action);
        yield put(errorCodeAddSuccess(action.payload));
    } catch (error) {
        console.error(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS,
            message: error.message
        }));
        yield put(errorCodeAddFailure(error));
    }
}

export const errorCodeAddApi = (action:any) => {

    const errorCode:IErrorCode = action.payload;
    const url:string = "/api/ErrorCode/Add/";

    console.log("errorCodeAddApi: " + url + " " + JSON.stringify(errorCode));
    console.log("Error Code", errorCode)
    
    return axios.post(url, errorCode);
};

function* errorCodeUpdateRequest(action:any) {
    try {
        yield call(errorCodeUpdateApi, action);
        yield put(errorCodeUpdateSuccess(action.payload));
    } catch (error) {
        console.error(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS,
            message: error.message
        }));
        yield put(errorCodeUpdateFailure(error));
    }
}

export const errorCodeUpdateApi = (action:any) => {

    const errorCode:IErrorCode = action.payload;
    const url:string = "/api/ErrorCode/Update/";

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
    const url:string = "/api/ErrorCode/Delete/";
    
    return axios.delete(url, {data: errorCode});
};

export default function* rootSaga() {
    yield all([
        takeLatest(ERRORCODE_GET_ALL, errorCodeGetAllRequest),
        takeLatest(ERRORCODE_ADD, errorCodeAddRequest),
        takeLatest(ERRORCODE_UPDATE, errorCodeUpdateRequest),
        takeLatest(ERRORCODE_DELETE, errorCodeDeleteRequest)
    ]);
}
