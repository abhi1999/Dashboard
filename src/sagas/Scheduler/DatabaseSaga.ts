import { all, call, put, takeLatest } from 'redux-saga/effects';
import { axiosSched } from '../../configs/axios'
import { 
    DATABASE_GET_ALL,
    DATABASE_ADD,
    DATABASE_UPDATE,
    DATABASE_DELETE
} from '../../constants/ActionTypes';
import { databaseGetAllSuccess, databaseGetAllFailure } from '../../actions/Scheduler/DatabaseAction';
import { databaseAddSuccess, databaseAddFailure } from '../../actions/Scheduler/DatabaseAction';
import { databaseUpdateSuccess, databaseUpdateFailure } from '../../actions/Scheduler/DatabaseAction';
import { databaseDeleteSuccess, databaseDeleteFailure } from '../../actions/Scheduler/DatabaseAction';
import Notifications from 'react-notification-system-redux';
import { ERROR_OPTIONS } from '../../constants/ServiceParameters';
import Database from '../../constants/scheduler/database';

function* databaseGetAllRequest() {
    try {
        const databaseList = yield call(databaseGetAllApi);
        yield put(databaseGetAllSuccess(databaseList));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(databaseGetAllFailure(error));
    }
}

export const databaseGetAllApi = () => {

    const url:string = "/api/workflow/config/databases";

    return axiosSched.get(url);
};

function* databaseAddRequest(action) {
    try {
        yield call(databaseAddApi, action);
        yield put(databaseAddSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(databaseAddFailure(error));
    }
}

export const databaseAddApi = (action) => {
    const database:Database = action.payload;
    const url:string = "/api/workflow/config/databases";

    return axiosSched.post(url, database);
};

function* databaseUpdateRequest(action) {
    try {
        yield call(databaseUpdateApi, action);
        yield put(databaseUpdateSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(databaseUpdateFailure(error));
    }
  }

export const databaseUpdateApi = (action) => {

    const database:Database = action.payload;
    const url:string = "/api/workflow/config/databases";
    console.log("databaseUpdateApi: " + url);

    return axiosSched.put(url, database);
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
    const url:string = "/api/workflow/config/databases/" + database.Id + "/" + database.ClientId + "/" + database.LastModified;
    console.log("databaseDeleteApi: " + url);

    return axiosSched.delete(url);
};

export default function* rootSaga() {
    yield all([
        takeLatest(DATABASE_GET_ALL, databaseGetAllRequest),
        takeLatest(DATABASE_ADD, databaseAddRequest),
        takeLatest(DATABASE_UPDATE, databaseUpdateRequest),
        takeLatest(DATABASE_DELETE, databaseDeleteRequest)
    ]);
}
