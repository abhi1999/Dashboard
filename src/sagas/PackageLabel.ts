import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from "../configs/axios";
import { FixURIComponent } from "../configs/axios"
import { 
    PACKAGE_LABEL_GET_ALL
} from './../constants/ActionTypes';
import { packageLabelGetAllSuccess, packageLabelGetAllFailure } from '../actions/PackageLabelAction';
import Notifications from 'react-notification-system-redux';
import { ERROR_OPTIONS } from './../constants/ServiceParameters';

function* packageLabelGetAllRequest(action:any) {
    try {
        const packageLabelList:any = yield call(packageLabelGetAllApi, action);
        yield put(packageLabelGetAllSuccess(packageLabelList));
    } catch (error) {
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(packageLabelGetAllFailure(error));
    }
}

export const packageLabelGetAllApi = (action:any) => {

    const tpPartID:string = action.payload;
    const endpoint:string = "/api/PackageLabel/Get?TP_PartID='" + FixURIComponent(tpPartID) + "'";
    const url:string = endpoint ; 

    console.log("PackageLabelGetAllApi: " + url);
    return axios.get(url);
};

export default function* rootSaga() {
    yield all([
        takeLatest(PACKAGE_LABEL_GET_ALL, packageLabelGetAllRequest),
    ]);
}
