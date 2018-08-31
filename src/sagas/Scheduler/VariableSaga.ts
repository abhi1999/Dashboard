import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from "axios";
import { 
    VARIABLE_GET_ALL,
    VARIABLE_ADD,
    VARIABLE_UPDATE,
    VARIABLE_DELETE
} from '../../constants/ActionTypes';
import { SCHEDULER_URL } from "../../configs";
import { variableGetAllSuccess, variableGetAllFailure } from '../../actions/Scheduler/VariableAction';
import { variableAddSuccess, variableAddFailure } from '../../actions/Scheduler/VariableAction';
import { variableUpdateSuccess, variableUpdateFailure } from '../../actions/Scheduler/VariableAction';
import { variableDeleteSuccess, variableDeleteFailure } from '../../actions/Scheduler/VariableAction';
import Notifications from 'react-notification-system-redux';
import { ERROR_OPTIONS } from '../../constants/ServiceParameters';
import Variable from '../../constants/scheduler/variable';

function* variableGetAllRequest() {
    try {
        const variableList = yield call(variableGetAllApi);
        yield put(variableGetAllSuccess(variableList));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(variableGetAllFailure(error));
    }
}

export const variableGetAllApi = () => {

    const endpoint:string = SCHEDULER_URL + "/api/workflow/config/variables";
    const url:string = endpoint;
    console.log("variableGetAllApi: " + url);

    return axios.get(url);
};

function* variableAddRequest(action) {
    try {
        yield call(variableAddApi, action);
        yield put(variableAddSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(variableAddFailure(error));
    }
}

export const variableAddApi = (action) => {

    const variable:Variable = action.payload;
    const url:string = SCHEDULER_URL +  "/api/workflow/config/variables";
    console.log("variableAddApi: " + url);

    return axios.post(url, variable);
};

function* variableUpdateRequest(action) {
    try {
        yield call(variableUpdateApi, action);
        yield put(variableUpdateSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(variableUpdateFailure(error));
    }
  }

export const variableUpdateApi = (action) => {

    const variable:Variable = action.payload;
    const url:string = SCHEDULER_URL +  "/api/workflow/config/variables";
    console.log("variableUpdateApi: " + url);

    return axios.put(url, variable);
};

function* variableDeleteRequest(action) {
    try {
        yield call(variableDeleteApi, action);
        yield put(variableDeleteSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(variableDeleteFailure(error));
    }
  }

export const variableDeleteApi = (action) => {

    const variable:Variable = action.payload;
    const url:string = SCHEDULER_URL +  "/api/workflow/config/variables/" + variable.Id + "/" + variable.ClientId + "/" + variable.LastModified;
    console.log("variableDeleteApi: " + url);

    return axios.delete(url);
};

export default function* rootSaga() {
    yield all([
        takeLatest(VARIABLE_GET_ALL, variableGetAllRequest),
        takeLatest(VARIABLE_ADD, variableAddRequest),
        takeLatest(VARIABLE_UPDATE, variableUpdateRequest),
        takeLatest(VARIABLE_DELETE, variableDeleteRequest)
    ]);
}
