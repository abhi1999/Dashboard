import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from "../configs/axios";
import { 
    EDI_DOC_GROUP_GET_ALL
} from './../constants/ActionTypes';
import { ediDocGroupGetAllSuccess, ediDocGroupGetAllFailure } from '../actions/EdiDocGroupAction';
import Notifications from 'react-notification-system-redux';
import { ERROR_OPTIONS } from './../constants/ServiceParameters';

function* ediDocGroupGetAllRequest(action:any) {
    try {
        const ediDocGroupList:any = yield call(ediDocGroupGetAllApi, action);
        yield put(ediDocGroupGetAllSuccess(ediDocGroupList));
    } catch (error) {
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(ediDocGroupGetAllFailure(error));
    }
}

export const ediDocGroupGetAllApi = () => {

    const url:string = "/odata/EDIDocGroupSet?$orderby=Doc_Group";

    console.log("ediDocGroupGetAllApi: " + url);
    return axios.get(url);
};

export default function* rootSaga() {
    yield all([
        takeLatest(EDI_DOC_GROUP_GET_ALL, ediDocGroupGetAllRequest),
    ]);
}
