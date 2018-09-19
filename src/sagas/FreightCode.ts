import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from "../configs/axios";
import { 
    FREIGHT_CODE_GET_ALL,
    FREIGHT_CODE_ADD,
    FREIGHT_CODE_UPDATE,
    FREIGHT_CODE_DELETE
} from './../constants/ActionTypes';
import { freightCodeGetAllSuccess, freightCodeGetAllFailure } from '../actions/FreightCode';
import { freightCodeAddSuccess, freightCodeAddFailure } from '../actions/FreightCode';
import { freightCodeUpdateSuccess, freightCodeUpdateFailure } from '../actions/FreightCode';
import { freightCodeDeleteSuccess, freightCodeDeleteFailure } from '../actions/FreightCode';
import Notifications from 'react-notification-system-redux';
import { ERROR_OPTIONS } from './../constants/ServiceParameters';
import buildQuery from "odata-query";
import FreightCode from "./../constants/implementations/FreightCode";

function* freightCodeGetAllRequest(action:any) {
    try {
        const freightCodeList:any = yield call(freightCodeGetAllApi, action);
        yield put(freightCodeGetAllSuccess(freightCodeList));
    } catch (error) {
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(freightCodeGetAllFailure(error));
    }
}

export const freightCodeGetAllApi = (action:any) => {

    const endpoint:string = "/odata/FreightCodeSet";
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

    return axios.get(url);
};


function* freightCodeAddRequest(action:any) {
    try {
        yield call(freightCodeAddApi, action);
        yield put(freightCodeAddSuccess(action.payload));
    } catch (error) {
        console.error(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(freightCodeAddFailure(error));
    }
}

export const freightCodeAddApi = (action) => {

    const freightCode:FreightCode = action.payload;
    const url:string = "/api/FreightCode/Add/";

    return axios.post(url, freightCode);
};

function* freightCodeUpdateRequest(action:any) {
    try {
        yield call(freightCodeUpdateApi, action);
        yield put(freightCodeUpdateSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(freightCodeUpdateFailure(error));
    }
  }

export const freightCodeUpdateApi = (action:any) => {

    const freightCode:FreightCode = action.payload;
    const url:string =  "/api/FreightCode/Update/";

    return axios.post(url, freightCode);
};

function* freightCodeDeleteRequest(action:any) {
    try {
        yield call(freightCodeDeleteApi, action);
        yield put(freightCodeDeleteSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(freightCodeDeleteFailure(error));
    }
  }


export const freightCodeDeleteApi = (action:any) => {

    const freightCode:FreightCode = action.payload;
    const url:string = "/api/FreightCode/Delete/" ;

    return axios.delete(url, {data:freightCode});
};

export default function* rootSaga() {
    yield all([
        takeLatest(FREIGHT_CODE_GET_ALL, freightCodeGetAllRequest),
        takeLatest(FREIGHT_CODE_ADD, freightCodeAddRequest),
        takeLatest(FREIGHT_CODE_UPDATE, freightCodeUpdateRequest),
        takeLatest(FREIGHT_CODE_DELETE, freightCodeDeleteRequest)
    ]);
}
