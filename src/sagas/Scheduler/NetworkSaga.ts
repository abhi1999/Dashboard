import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from "axios";
import { 
    NETWORK_GET_ALL,
    NETWORK_ADD,
    NETWORK_UPDATE,
    NETWORK_DELETE
} from '../../constants/ActionTypes';
import { SCHEDULER_URL } from "../../configs";;
import { networkGetAllSuccess, networkGetAllFailure } from '../../actions/Scheduler/NetworkAction';
import { networkAddSuccess, networkAddFailure } from '../../actions/Scheduler/NetworkAction';
import { networkUpdateSuccess, networkUpdateFailure } from '../../actions/Scheduler/NetworkAction';
import { networkDeleteSuccess, networkDeleteFailure } from '../../actions/Scheduler/NetworkAction';
import Notifications from 'react-notification-system-redux';
import { ERROR_OPTIONS } from '../../constants/ServiceParameters';
import Network from '../../constants/scheduler/network';

function* networkGetAllRequest() {
    try {
        const networkList = yield call(networkGetAllApi);
        yield put(networkGetAllSuccess(networkList));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(networkGetAllFailure(error));
    }
}

export const networkGetAllApi = () => {

    const endpoint:string = SCHEDULER_URL + "/api/workflow/config/networks";
    const url:string = endpoint;
    console.log("networkGetAllApi: " + url);

    return axios.get(url);
};

function* networkAddRequest(action) {
    try {
        yield call(networkAddApi, action);
        yield put(networkAddSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(networkAddFailure(error));
    }
}

export const networkAddApi = (action) => {

    const network:Network = action.payload;
    const url:string = SCHEDULER_URL +  "/api/workflow/config/networks";
    console.log("networkAddApi: " + url);

    return axios.post(url, network);
};

function* networkUpdateRequest(action) {
    try {
        yield call(networkUpdateApi, action);
        yield put(networkUpdateSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(networkUpdateFailure(error));
    }
  }

export const networkUpdateApi = (action) => {

    const network:Network = action.payload;
    const url:string = SCHEDULER_URL +  "/api/workflow/config/networks";
    console.log("networkUpdateApi: " + url);

    return axios.put(url, network);
};

function* networkDeleteRequest(action) {
    try {
        yield call(networkDeleteApi, action);
        yield put(networkDeleteSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(networkDeleteFailure(error));
    }
  }


export const networkDeleteApi = (action) => {

    const network:Network = action.payload;
    const url:string = SCHEDULER_URL +  "/api/workflow/config/networks/" + network.Id + "/" + network.ClientId + "/" + network.LastModified;
    console.log("networkDeleteApi: " + url);

    return axios.delete(url);
};

export default function* rootSaga() {
    yield all([
        takeLatest(NETWORK_GET_ALL, networkGetAllRequest),
        takeLatest(NETWORK_ADD, networkAddRequest),
        takeLatest(NETWORK_UPDATE, networkUpdateRequest),
        takeLatest(NETWORK_DELETE, networkDeleteRequest)
    ]);
}
