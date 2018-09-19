import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from "../configs/axios";
import { 
    ACCT_PACKAGE_GET_ALL
} from './../constants/ActionTypes';
import { acctPackageGetAllSuccess, acctPackageGetAllFailure } from '../actions/AcctPackageAction';
import Notifications from 'react-notification-system-redux';
import { ERROR_OPTIONS } from './../constants/ServiceParameters';

function* acctPackageGetAllRequest(action:any) {
    try {
        const acctPackageList:any = yield call(acctPackageGetAllApi, action);
        yield put(acctPackageGetAllSuccess(acctPackageList));
    } catch (error) {
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(acctPackageGetAllFailure(error));
    }
}

export const acctPackageGetAllApi = () => {

    const url:string = "/odata/AcctPackageSet?$orderby=DisplayOrder";

    console.log("acctpackageGetAllApi: " + url);
    return axios.get(url);
};

export default function* rootSaga() {
    yield all([
        takeLatest(ACCT_PACKAGE_GET_ALL, acctPackageGetAllRequest),
    ]);
}
