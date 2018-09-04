import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from "axios";
import { 
    KIT_TYPE_GET_ALL
} from './../constants/ActionTypes';
import { BASE_URL } from "../configs";
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

    const endpoint:string = BASE_URL + "/odata/KitTypeSet";
    const url:string = endpoint ; 

    console.log("kitTypeGetAllApi: " + url);
    return axios.get(url);
};

export default function* rootSaga() {
    yield all([
        takeLatest(KIT_TYPE_GET_ALL, kitTypeGetAllRequest),
    ]);
}
