import { all, call, put, takeLatest } from 'redux-saga/effects';
import { axiosSched } from '../../configs/axios'
import { 
    WORKFLOW_GET_ALL,
    WORKFLOW_ADD,
    WORKFLOW_UPDATE,
    WORKFLOW_DELETE
} from '../../constants/ActionTypes';

import { taskGetAllApi } from './TaskSaga';
import { taskGetAllSuccess } from '../../actions/Scheduler/TaskAction';
import { workflowGetAllSuccess, workflowGetAllFailure } from '../../actions/Scheduler/WorkflowAction';
import { workflowAddSuccess, workflowAddFailure } from '../../actions/Scheduler/WorkflowAction';
import { workflowUpdateSuccess, workflowUpdateFailure } from '../../actions/Scheduler/WorkflowAction';
import { workflowDeleteSuccess, workflowDeleteFailure } from '../../actions/Scheduler/WorkflowAction';
import Notifications from 'react-notification-system-redux';
import { ERROR_OPTIONS } from '../../constants/ServiceParameters';
import Workflow from '../../constants/scheduler/workflow';

function* workflowGetAllRequest() {
    try {
        // Workflows are dependent upon Tasks, so make sure those are loaded first
        const taskList = yield call(taskGetAllApi);
        yield put(taskGetAllSuccess(taskList));
        const workflowList = yield call(workflowGetAllApi);
        yield put(workflowGetAllSuccess(workflowList));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(workflowGetAllFailure(error));
    }
}

export const workflowGetAllApi = () => {

    const endpoint:string = "/api/workflow/config/workflows";
    const url:string = endpoint;

    return axiosSched.get(url);
};

function* workflowAddRequest(action) {
    try {
        yield call(workflowAddApi, action);
        yield put(workflowAddSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(workflowAddFailure(error));
    }
}

export const workflowAddApi = (action) => {

    const workflow:Workflow = action.payload;
    const url:string = "/api/workflow/config/workflows";

    return axiosSched.post(url, workflow);
};

function* workflowUpdateRequest(action) {
    try {
        yield call(workflowUpdateApi, action);
        yield put(workflowUpdateSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(workflowUpdateFailure(error));
    }
  }

export const workflowUpdateApi = (action) => {

    const workflow:Workflow = action.payload;
    const url:string = "/api/workflow/config/workflows";

    return axiosSched.put(url, workflow);
};

function* workflowDeleteRequest(action) {
    try {
        yield call(workflowDeleteApi, action);
        yield put(workflowDeleteSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(workflowDeleteFailure(error));
    }
  }

export const workflowDeleteApi = (action) => {

    const workflow:Workflow = action.payload;
    const url:string = "/api/workflow/config/workflows/" + workflow.Id + "/" + workflow.ClientId + "/" + workflow.LastModified;

    return axiosSched.delete(url);
};

export default function* rootSaga() {
    yield all([
        takeLatest(WORKFLOW_GET_ALL, workflowGetAllRequest),
        takeLatest(WORKFLOW_ADD, workflowAddRequest),
        takeLatest(WORKFLOW_UPDATE, workflowUpdateRequest),
        takeLatest(WORKFLOW_DELETE, workflowDeleteRequest)
    ]);
}
