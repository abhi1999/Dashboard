import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from "../configs/axios";
import { 
    PARTNER_DOC_GROUP_GET_ALL,
    PARTNER_DOC_GROUP_ADD,
    PARTNER_DOC_GROUP_DELETE
} from './../constants/ActionTypes';
import { partnerDocGroupGetAllSuccess, partnerDocGroupGetAllFailure } from '../actions/PartnerDocGroupAction';
import { partnerDocGroupAddSuccess, partnerDocGroupAddFailure } from '../actions/PartnerDocGroupAction';
import { partnerDocGroupDeleteSuccess, partnerDocGroupDeleteFailure } from '../actions/PartnerDocGroupAction';

import PartnerDocGroupModel from './../constants/implementations/PartnerDocGroupModel'

import Notifications from 'react-notification-system-redux';
import { ERROR_OPTIONS } from './../constants/ServiceParameters';

function* partnerDocGroupGetAllRequest(action:any) {
    try {
        const partnerDocGroupList:any = yield call(partnerDocGroupGetAllApi, action);
        yield put(partnerDocGroupGetAllSuccess(partnerDocGroupList));
    } catch (error) {
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(partnerDocGroupGetAllFailure(error));
    }
}

export const partnerDocGroupGetAllApi = (action:any) => {

    console.log("partnerDocGroupGetAllApi: ");

    const tpPartID:string = action.payload;
    const endpoint:string = "/odata/PartnerDocGroupSet?$orderby=Doc_Group,PartnerID&$filter=TP_PartID eq '" + tpPartID + "'";
    const url:string = endpoint ; 

    console.log("partnerDocGroupGetAllApi: " + url);
    return axios.get(url);
};

function* partnerDocGroupAddRequest(action:any) {
    try {
        yield call(partnerDocGroupAddApi, action);
        yield put(partnerDocGroupAddSuccess(action.payload));
    } catch (error) {
        console.error(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(partnerDocGroupAddFailure(error));
    }
}

export const partnerDocGroupAddApi = (action) => {

    const partnerDocGroup:PartnerDocGroupModel = action.payload;
    const url:string = "/api/Partner/Add/";

    return axios.post(url, partnerDocGroup);
};

function* partnerDocGroupDeleteRequest(action:any) {
    try {
        yield call(partnerDocGroupDeleteApi, action);
        yield put(partnerDocGroupDeleteSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(partnerDocGroupDeleteFailure(error));
    }
  }

export const partnerDocGroupDeleteApi = (action:any) => {

    const partnerDocGroup:PartnerDocGroupModel = action.payload;
    const url:string = "/api/Partner/Delete/" ;

    return axios.delete(url, {data:partnerDocGroup});
};

export default function* rootSaga() {
    yield all([
        takeLatest(PARTNER_DOC_GROUP_GET_ALL, partnerDocGroupGetAllRequest),
        takeLatest(PARTNER_DOC_GROUP_ADD, partnerDocGroupAddRequest),
        takeLatest(PARTNER_DOC_GROUP_DELETE, partnerDocGroupDeleteRequest)

    ]);
}
