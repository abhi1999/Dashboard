import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from "../configs/axios";
import { 
    PACKAGE_GET_ALL
} from './../constants/ActionTypes';
import { packageGetAllSuccess, packageGetAllFailure } from '../actions/PackageAction';
import Notifications from 'react-notification-system-redux';
import { ERROR_OPTIONS } from './../constants/ServiceParameters';

function* packageGetAllRequest(action:any) {
    try {
        const packageList:any = yield call(packageGetAllApi, action);
        yield put(packageGetAllSuccess(packageList));
    } catch (error) {
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(packageGetAllFailure(error));
    }
}

export const packageGetAllApi = () => {

    const url:string = "/odata/PackageSet";

    return axios.get(url);
};

export default function* rootSaga() {
    yield all([
        takeLatest(PACKAGE_GET_ALL, packageGetAllRequest),
    ]);
}
