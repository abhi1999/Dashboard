import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { IsNotNull, StringChecker } from '../utils/Conversion';
import Notifications from 'react-notification-system-redux';
import { ERROR_OPTIONS } from '../constants/ServiceParameters';

import { 
    SERVICE_STATE_RUNNING, 
    SERVICE_STATE_STOPPED, 
    SERVICE_STATE_UNKNOWN 
} from './../constants/ServiceParameters';

import axios from "axios";
import { 
    TASK_STATUS_LIST_GET_ALL,
    SERVICE_GET_STATE,
    SERVICE_COMMAND,
    TASK_COMMAND,
    TOAST_ERROR
} from './../constants/ActionTypes';
import { SCHEDULER_URL } from "./../configs/";
import { taskStatusListGetAllSuccess, taskStatusListGetAllFailure } from './../actions/Service';
import { serviceGetStateSuccess, serviceGetStateFailure } from './../actions/Service';
import { serviceCommandSuccess, serviceCommandFailure } from './../actions/Service';
import { taskCommandSuccess, taskCommandFailure } from './../actions/Service';
import { taskStatusListGetAll } from './../actions/Service';
import { workflowGetAll } from './../actions/Workflow';
import { taskGetAll } from './../actions/Task';
import { schedulerGetAll } from './../actions/Scheduler';
import { networkGetAll } from './../actions/Network';
import { databaseGetAll } from './../actions/Database';
import { folderGetAll } from './../actions/Folder';
import { variableGetAll } from './../actions/Variable';
import ServiceState from './../constants/scheduler/serviceState';
import TaskState from './../constants/scheduler/taskState';

export const getServiceState = (state) => state.service

function* toastErrorRequest(action) {
    try {
        yield put(Notifications.error({ ...ERROR_OPTIONS, title: "Error", message: action.payload }));
    } catch (error) {
        console.log(error);
    }
}

function* taskStatusListGetAllRequest() {
    try {
        const taskStatusList = yield call(taskStatusListGetAllApi);
        yield put(taskStatusListGetAllSuccess(taskStatusList));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(taskStatusListGetAllFailure(error));
    }
}

export const taskStatusListGetAllApi = () => {

    const endpoint:string = SCHEDULER_URL + "/api/workflow/service/tasks";
    const url:string = endpoint;
    console.log("taskStatusListGetAllApi: " + url);

    return axios.get(url);
};

const wait = ms => (
    new Promise(resolve => {
      setTimeout(() => resolve(), ms)
    })
  )

function* serviceGetStateRequest() {
    while(true) {
        try {
            yield call(wait, 3000);
            const serviceState:any = yield call(serviceGetStateApi);
            const state:any = yield select(getServiceState);

            const currentServiceState:ServiceState = serviceState.data;
            const previousServiceState:ServiceState = state.serviceState;
            
            let refreshTasks = false;
            let refreshConfig = false;
            
            if (IsNotNull(previousServiceState) && IsNotNull(currentServiceState))
                {
                // This logic checks to see if the serviceState has changed, and warrants a refresh of the taskStatusList
                if (IsNotNull(currentServiceState.CurrentState)
                    && IsNotNull(previousServiceState.CurrentState)
                    && currentServiceState.CurrentState !== SERVICE_STATE_UNKNOWN
                    && previousServiceState.CurrentState !== SERVICE_STATE_UNKNOWN)
                {
                    if (currentServiceState.CurrentState !== previousServiceState.CurrentState)
                    {
                        refreshTasks = true;
                    }
                    else if (currentServiceState.HashValue !== previousServiceState.HashValue)
                    {
                        refreshTasks = true;
                    }
                    else if (previousServiceState.CurrentState === SERVICE_STATE_RUNNING)
                    {
                        if (state.taskStatusList == null || state.taskStatusList.length === 0)
                        {
                            refreshTasks = true;
                        }
                    }
                    else if (previousServiceState.CurrentState === SERVICE_STATE_STOPPED)
                    {
                        if (IsNotNull(state.taskStatusList) && state.taskStatusList.length > 0)
                        {
                            refreshTasks = true;
                        }
                    }
                    if (currentServiceState.CurrentState === SERVICE_STATE_RUNNING)
                    {
                        if (previousServiceState.CurrentState !== SERVICE_STATE_RUNNING)
                        {
                            refreshConfig = true;
                        }
                    }
                }
        
                // The following logic checks to see if a change in the configuration data by another client warrants a refresh here.
                if (StringChecker(state.lastModified).length === 0)
                {
                    state.lastModified = currentServiceState.LastModifiedServer;
                }
                else if (currentServiceState.LastModifiedServer !== state.lastModified)
                {
                    if (IsNotNull(currentServiceState.LastModifiedServer))
                    {
                        if (StringChecker(currentServiceState.ClientId).length > 0 && (currentServiceState.ClientId !== state.clientId))
                        {
                            refreshConfig = true;
                        }
                    }
                }
                
                if (refreshTasks)
                {
                    console.log("%c refreshTasks", "color: red");
                    yield put(taskStatusListGetAll());
                }
        
                if (refreshConfig)
                {
                    yield put(workflowGetAll());
                    yield put(taskGetAll());
                    yield put(schedulerGetAll());
                    yield put(networkGetAll());
                    yield put(databaseGetAll());
                    yield put(folderGetAll());
                    yield put(variableGetAll());
                }
            }
            yield put(serviceGetStateSuccess(serviceState));
        } catch (error) {
            console.log(error);
            yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
            yield put(serviceGetStateFailure(error));
        }
    }
}

export const serviceGetStateApi = () => {

    const endpoint:string = SCHEDULER_URL + "/api/workflow/service";
    const url:string = endpoint;
    console.log("serviceGetStateApi: " + url);

    return axios.get(url);
};

function* serviceCommandRequest(action) {
    try {
        const controlCommand:ServiceState = new ServiceState({
            ControlCommand: action.payload,
            CurrentState: "stopped",
            AdminTaskRunCount: 0,
        });
        const serviceState = yield call(serviceCommandApi, controlCommand);
        yield put(serviceCommandSuccess(serviceState));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(serviceCommandFailure(error));
    }
}

export const serviceCommandApi = (controlCommand) => {

    const url:string = SCHEDULER_URL +  "/api/workflow/service";
    console.log("serviceCommandApi: " + url);

    return axios.put(url, controlCommand);
};

function* taskCommandRequest(action) {
    try {
        const taskCommand:TaskState = new TaskState({
            TaskCommand: action.payload,
            TaskId: action.Id
        })
        const taskState = yield call(taskCommandApi, taskCommand);
        yield put(taskCommandSuccess(taskState));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(taskCommandFailure(error));
    }
}

export const taskCommandApi = (taskCommand) => {

    const url:string = SCHEDULER_URL +  "/api/workflow/service/task";
    console.log("taskCommandApi: " + url);

    return axios.put(url, taskCommand);
};

export default function* rootSaga() {
    yield all([
        takeLatest(TOAST_ERROR, toastErrorRequest),
        takeLatest(TASK_STATUS_LIST_GET_ALL, taskStatusListGetAllRequest),
        takeLatest(SERVICE_GET_STATE, serviceGetStateRequest),
        takeLatest(SERVICE_COMMAND, serviceCommandRequest),
        takeLatest(TASK_COMMAND, taskCommandRequest)
    ]);
}
