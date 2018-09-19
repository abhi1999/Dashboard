import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from "../configs/axios";
import { 
    KIT_TYPE_GET_ALL
} from './../constants/ActionTypes';
import { kitTypeGetAllSuccess, kitTypeGetAllFailure } from '../actions/KitTypeAction';
import Notifications from 'react-notification-system-redux';
import { ERROR_OPTIONS } from './../constants/ServiceParameters';

function* kitTypeGetAllRequest(action:any) {
    try {
        const kitTypeList:any = yield call(kitTypeGetAllApi, action);
        yield put(kitTypeGetAllSuccess(kitTypeList));
    } catch (error) {
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(kitTypeGetAllFailure(error));
    }
}

export const kitTypeGetAllApi = () => {

    const url:string = "/odata/KitTypeSet";

    console.log("kitTypeGetAllApi: " + url);
    return axios.get(url);
};

export default function* rootSaga() {
    yield all([
        takeLatest(KIT_TYPE_GET_ALL, kitTypeGetAllRequest),
    ]);
}
