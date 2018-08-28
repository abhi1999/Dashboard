import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from "axios";
import { 
    DATABASE_GET_ALL,
    DATABASE_ADD,
    DATABASE_UPDATE,
    DATABASE_DELETE
} from './../constants/ActionTypes';
import { SCHEDULER_URL } from "./../configs/";
import { databaseGetAllSuccess, databaseGetAllFailure } from './../actions/Database';
import { databaseAddSuccess, databaseAddFailure } from './../actions/Database';
import { databaseUpdateSuccess, databaseUpdateFailure } from './../actions/Database';
import { databaseDeleteSuccess, databaseDeleteFailure } from './../actions/Database';
import Notifications from 'react-notification-system-redux';
import { ERROR_OPTIONS } from '../constants/ServiceParameters';
import Database from './../constants/scheduler/database';

function* databaseGetAllRequest() {
    try {
        const databaseList = yield call(databaseGetAllApi);
        yield put(databaseGetAllSuccess(databaseList));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(databaseGetAllFailure(error));
    }
}

export const databaseGetAllApi = () => {

    const endpoint:string = SCHEDULER_URL + "/api/workflow/config/databases";
    const url:string = endpoint;
    console.log("databaseGetAllApi: " + url);

    return axios.get(url);
};

function* databaseAddRequest(action) {
    try {
        yield call(databaseAddApi, action);
        yield put(databaseAddSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(databaseAddFailure(error));
    }
}

export const databaseAddApi = (action) => {

    const database:Database = action.payload;
    const url:string = SCHEDULER_URL +  "/api/workflow/config/databases";
    console.log("databaseAddApi: " + url);

    return axios.post(url, database);
};

function* databaseUpdateRequest(action) {
    try {
        yield call(databaseUpdateApi, action);
        yield put(databaseUpdateSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(databaseUpdateFailure(error));
    }
  }

export const databaseUpdateApi = (action) => {

    const database:Database = action.payload;
    const url:string = SCHEDULER_URL +  "/api/workflow/config/databases";
    console.log("databaseUpdateApi: " + url);

    return axios.put(url, database);
};

function* databaseDeleteRequest(action) {
    try {
        yield call(databaseDeleteApi, action);
        yield put(databaseDeleteSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(databaseDeleteFailure(error));
    }
  }


export const databaseDeleteApi = (action) => {

    const database:Database = action.payload;
    const url:string = SCHEDULER_URL +  "/api/workflow/config/databases/" + database.Id + "/" + database.ClientId + "/" + database.LastModified;
    console.log("databaseDeleteApi: " + url);

    return axios.delete(url);
};

export default function* rootSaga() {
    yield all([
        takeLatest(DATABASE_GET_ALL, databaseGetAllRequest),
        takeLatest(DATABASE_ADD, databaseAddRequest),
        takeLatest(DATABASE_UPDATE, databaseUpdateRequest),
        takeLatest(DATABASE_DELETE, databaseDeleteRequest)
    ]);
}
