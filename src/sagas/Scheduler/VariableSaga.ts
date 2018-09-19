import { all, call, put, takeLatest } from 'redux-saga/effects';
import { axiosSched } from '../../configs/axios'
import { 
    VARIABLE_GET_ALL,
    VARIABLE_ADD,
    VARIABLE_UPDATE,
    VARIABLE_DELETE
} from '../../constants/ActionTypes';
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
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(variableGetAllFailure(error));
    }
}

export const variableGetAllApi = () => {

    const endpoint:string = "/api/workflow/config/variables";
    const url:string = endpoint;

    return axiosSched.get(url);
};

function* variableAddRequest(action) {
    try {
        yield call(variableAddApi, action);
        yield put(variableAddSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(variableAddFailure(error));
    }
}

export const variableAddApi = (action) => {

    const variable:Variable = action.payload;
    const url:string =  "/api/workflow/config/variables";

    return axiosSched.post(url, variable);
};

function* variableUpdateRequest(action) {
    try {
        yield call(variableUpdateApi, action);
        yield put(variableUpdateSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(variableUpdateFailure(error));
    }
  }

export const variableUpdateApi = (action) => {

    const variable:Variable = action.payload;
    const url:string = "/api/workflow/config/variables";

    return axiosSched.put(url, variable);
};

function* variableDeleteRequest(action) {
    try {
        yield call(variableDeleteApi, action);
        yield put(variableDeleteSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(variableDeleteFailure(error));
    }
  }

export const variableDeleteApi = (action) => {

    const variable:Variable = action.payload;
    const url:string = "/api/workflow/config/variables/" + variable.Id + "/" + variable.ClientId + "/" + variable.LastModified;

    return axiosSched.delete(url);
};

export default function* rootSaga() {
    yield all([
        takeLatest(VARIABLE_GET_ALL, variableGetAllRequest),
        takeLatest(VARIABLE_ADD, variableAddRequest),
        takeLatest(VARIABLE_UPDATE, variableUpdateRequest),
        takeLatest(VARIABLE_DELETE, variableDeleteRequest)
    ]);
}
