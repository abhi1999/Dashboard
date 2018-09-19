import { all, call, put, takeLatest } from 'redux-saga/effects';
import { axiosSched } from '../../configs/axios'
import { 
    TASK_GET_ALL,
    TASK_ADD,
    TASK_UPDATE,
    TASK_DELETE
} from '../../constants/ActionTypes';
import { workflowGetAllApi } from './WorkflowSaga';
import { workflowGetAllSuccess } from '../../actions/Scheduler/WorkflowAction';
import { taskGetAllSuccess, taskGetAllFailure } from '../../actions/Scheduler/TaskAction';
import { taskAddSuccess, taskAddFailure } from '../../actions/Scheduler/TaskAction';
import { taskUpdateSuccess, taskUpdateFailure } from '../../actions/Scheduler/TaskAction';
import { taskDeleteSuccess, taskDeleteFailure } from '../../actions/Scheduler/TaskAction';
import Notifications from 'react-notification-system-redux';
import { ERROR_OPTIONS } from '../../constants/ServiceParameters';
import Task from '../../constants/scheduler/task';

function* taskGetAllRequest() {
    try {
        const taskList = yield call(taskGetAllApi);
        yield put(taskGetAllSuccess(taskList));
        // A loaded workflow is necessary to validate the potential removal of active status
        const workflowList = yield call(workflowGetAllApi);
        yield put(workflowGetAllSuccess(workflowList));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(taskGetAllFailure(error));
    }
}

export const taskGetAllApi = () => {

    const endpoint:string = "/api/workflow/config/tasks";
    const url:string = endpoint;

    return axiosSched.get(url);
};

function* taskAddRequest(action) {
    try {
        yield call(taskAddApi, action);
        yield put(taskAddSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(taskAddFailure(error));
    }
}

export const taskAddApi = (action) => {

    const task:Task = action.payload;
    const url:string = "/api/workflow/config/tasks";

    return axiosSched.post(url, task);
};

function* taskUpdateRequest(action) {
    try {
        yield call(taskUpdateApi, action);
        yield put(taskUpdateSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(taskUpdateFailure(error));
    }
  }

export const taskUpdateApi = (action) => {

    const task:Task = action.payload;
    const url:string = "/api/workflow/config/tasks";

    return axiosSched.put(url, task);
};

function* taskDeleteRequest(action) {
    try {
        yield call(taskDeleteApi, action);
        yield put(taskDeleteSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(taskDeleteFailure(error));
    }
  }


export const taskDeleteApi = (action) => {

    const task:Task = action.payload;
    const url:string = "/api/workflow/config/tasks/" + task.Id + "/" + task.ClientId + "/" + task.LastModified;

    return axiosSched.delete(url);
};

export default function* rootSaga() {
    yield all([
        takeLatest(TASK_GET_ALL, taskGetAllRequest),
        takeLatest(TASK_ADD, taskAddRequest),
        takeLatest(TASK_UPDATE, taskUpdateRequest),
        takeLatest(TASK_DELETE, taskDeleteRequest)
    ]);
}
