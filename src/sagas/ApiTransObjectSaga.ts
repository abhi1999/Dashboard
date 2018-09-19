import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from "../configs/axios";
import { 
    API_TRANS_OBJECT_GET_ALL
} from './../constants/ActionTypes';
import { apiTransObjectGetAllSuccess, apiTransObjectGetAllFailure } from '../actions/ApiTransObjectAction';
import Notifications from 'react-notification-system-redux';
import { ERROR_OPTIONS } from './../constants/ServiceParameters';

function* apiTransObjectGetAllRequest(action:any) {
    try {
        const apiTransObjectList:any = yield call(apiTransObjectGetAllApi, action);
        yield put(apiTransObjectGetAllSuccess(apiTransObjectList));
    } catch (error) {
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(apiTransObjectGetAllFailure(error));
    }
}

export const apiTransObjectGetAllApi = (action:any) => {
    const dgid = action.payload.dgid;
    const tppartid = action.payload.tppartid;
    const endpoint:string = "/odata/ApiTransObjectSet()?transid=&dgid=" + dgid + "&tppartid=" + tppartid;
    const url:string = endpoint ; 

    console.log("apiTransObjectGetAllApi: " + url);
    return axios.get(url);
};

export default function* rootSaga() {
    yield all([
        takeLatest(API_TRANS_OBJECT_GET_ALL, apiTransObjectGetAllRequest),
    ]);
}
