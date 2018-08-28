import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from "axios";
import { 
    TASK_GET_ALL,
    TASK_ADD,
    TASK_UPDATE,
    TASK_DELETE
} from './../constants/ActionTypes';
import { SCHEDULER_URL } from "./../configs/";
import { workflowGetAllApi } from './../sagas/Workflow';
import { workflowGetAllSuccess } from './../actions/Workflow';
import { taskGetAllSuccess, taskGetAllFailure } from './../actions/Task';
import { taskAddSuccess, taskAddFailure } from './../actions/Task';
import { taskUpdateSuccess, taskUpdateFailure } from './../actions/Task';
import { taskDeleteSuccess, taskDeleteFailure } from './../actions/Task';
import Notifications from 'react-notification-system-redux';
import { ERROR_OPTIONS } from '../constants/ServiceParameters';
import Task from './../constants/scheduler/task';

function* taskGetAllRequest() {
    try {
        const taskList = yield call(taskGetAllApi);
        yield put(taskGetAllSuccess(taskList));
        // A loaded workflow is necessary to validate the potential removal of active status
        const workflowList = yield call(workflowGetAllApi);
        yield put(workflowGetAllSuccess(workflowList));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(taskGetAllFailure(error));
    }
}

export const taskGetAllApi = () => {

    const endpoint:string = SCHEDULER_URL + "/api/workflow/config/tasks";
    const url:string = endpoint;
    console.log("taskGetAllApi: " + url);

    return axios.get(url);
};

function* taskAddRequest(action) {
    try {
        yield call(taskAddApi, action);
        yield put(taskAddSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(taskAddFailure(error));
    }
}

export const taskAddApi = (action) => {

    const task:Task = action.payload;
    const url:string = SCHEDULER_URL +  "/api/workflow/config/tasks";
    console.log("taskAddApi: " + url);

    return axios.post(url, task);
};

function* taskUpdateRequest(action) {
    try {
        yield call(taskUpdateApi, action);
        yield put(taskUpdateSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(taskUpdateFailure(error));
    }
  }

export const taskUpdateApi = (action) => {

    const task:Task = action.payload;
    const url:string = SCHEDULER_URL +  "/api/workflow/config/tasks";
    console.log("taskUpdateApi: " + url);

    return axios.put(url, task);
};

function* taskDeleteRequest(action) {
    try {
        yield call(taskDeleteApi, action);
        yield put(taskDeleteSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(taskDeleteFailure(error));
    }
  }


export const taskDeleteApi = (action) => {

    const task:Task = action.payload;
    const url:string = SCHEDULER_URL +  "/api/workflow/config/tasks/" + task.Id + "/" + task.ClientId + "/" + task.LastModified;
    console.log("taskDeleteApi: " + url);

    return axios.delete(url);
};

export default function* rootSaga() {
    yield all([
        takeLatest(TASK_GET_ALL, taskGetAllRequest),
        takeLatest(TASK_ADD, taskAddRequest),
        takeLatest(TASK_UPDATE, taskUpdateRequest),
        takeLatest(TASK_DELETE, taskDeleteRequest)
    ]);
}
