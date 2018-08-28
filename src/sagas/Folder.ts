import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from "axios";
import { 
    FOLDER_GET_ALL,
    FOLDER_ADD,
    FOLDER_UPDATE,
    FOLDER_DELETE
} from './../constants/ActionTypes';
import { SCHEDULER_URL } from "./../configs/";
import { folderGetAllSuccess, folderGetAllFailure } from './../actions/Folder';
import { folderAddSuccess, folderAddFailure } from './../actions/Folder';
import { folderUpdateSuccess, folderUpdateFailure } from './../actions/Folder';
import { folderDeleteSuccess, folderDeleteFailure } from './../actions/Folder';
import Notifications from 'react-notification-system-redux';
import { ERROR_OPTIONS } from '../constants/ServiceParameters';
import Folder from './../constants/scheduler/folder';

function* folderGetAllRequest() {
    try {
        const folderList = yield call(folderGetAllApi);
        yield put(folderGetAllSuccess(folderList));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(folderGetAllFailure(error));
    }
}

export const folderGetAllApi = () => {

    const endpoint:string = SCHEDULER_URL + "/api/workflow/config/folders";
    const url:string = endpoint;
    console.log("folderGetAllApi: " + url);

    return axios.get(url);
};

function* folderAddRequest(action) {
    try {
        yield call(folderAddApi, action);
        yield put(folderAddSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(folderAddFailure(error));
    }
}

export const folderAddApi = (action) => {

    const folder:Folder = action.payload;
    const url:string = SCHEDULER_URL +  "/api/workflow/config/folders";
    console.log("folderAddApi: " + url);

    return axios.post(url, folder);
};

function* folderUpdateRequest(action) {
    try {
        yield call(folderUpdateApi, action);
        yield put(folderUpdateSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(folderUpdateFailure(error));
    }
  }

export const folderUpdateApi = (action) => {

    const folder:Folder = action.payload;
    const url:string = SCHEDULER_URL +  "/api/workflow/config/folders";
    console.log("folderUpdateApi: " + url);

    return axios.put(url, folder);
};

function* folderDeleteRequest(action) {
    try {
        yield call(folderDeleteApi, action);
        yield put(folderDeleteSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(folderDeleteFailure(error));
    }
  }


export const folderDeleteApi = (action) => {

    const folder:Folder = action.payload;
    const url:string = SCHEDULER_URL +  "/api/workflow/config/folders/" + folder.Id + "/" + folder.ClientId + "/" + folder.LastModified;
    console.log("folderDeleteApi: " + url);

    return axios.delete(url);
};

export default function* rootSaga() {
    yield all([
        takeLatest(FOLDER_GET_ALL, folderGetAllRequest),
        takeLatest(FOLDER_ADD, folderAddRequest),
        takeLatest(FOLDER_UPDATE, folderUpdateRequest),
        takeLatest(FOLDER_DELETE, folderDeleteRequest)
    ]);
}
