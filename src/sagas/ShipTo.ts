import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from "../configs/axios";
import { 
    SHIPTO_GET_ALL,
    SHIPTO_ADD,
    SHIPTO_UPDATE,
    SHIPTO_DELETE
} from './../constants/ActionTypes';
import { shipToGetAllSuccess, shipToGetAllFailure } from '../actions/ShipTo';
import { shipToAddSuccess, shipToAddFailure } from '../actions/ShipTo';
import { shipToUpdateSuccess, shipToUpdateFailure } from '../actions/ShipTo';
import { shipToDeleteSuccess, shipToDeleteFailure } from '../actions/ShipTo';
import Notifications from 'react-notification-system-redux';
import { ERROR_OPTIONS } from './../constants/ServiceParameters';
import buildQuery from "odata-query";
import {IShipTo} from "./../constants/edidb";

function* shipToGetAllRequest(action:any) {
    try {
        const shipToList:any = yield call(shipToGetAllApi, action);
        yield put(shipToGetAllSuccess(shipToList));
    } catch (error) {
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(shipToGetAllFailure(error));
    }
}

export const shipToGetAllApi = (action:any) => {

    // alert("PAYLOAD: " + JSON.stringify(action.payload, null, 2));
    // const TP_PartID:string = action.payload;
    const endpoint:string = "/odata/ShipToSet";

    // console.log("PAYLOAD: " + JSON.stringify(action.payload, null, 2));
    const count:boolean = true;
    const top:string = action.payload.top;
    const skip:string = action.payload.skip;
    const orderBy:string[] = [];
    if (action.payload.sorted) {
        action.payload.sorted.map((s:any) => {
            const column:string = s.id + (s.desc ? " desc" : ""); 
            orderBy.push(column);
        });
    }

    const filter:string[] = [];
    if (action.payload.filtered) {
        action.payload.filtered.map((f:any) => {
            const column:string = "contains(" + f.id + ", '" + f.value + "')";
            filter.push(column);
        });
    }

    const oDataParams:string = buildQuery({
        count,
        top,
        skip,
        orderBy,
        filter
    });

    let url:string = endpoint + oDataParams;

    url += "" // "?$filter=TP_PartID eq '" + TP_PartID + "'";

    console.log("shipToGetAllApi: " + url);
    return axios.get(url);
};

function* shipToAddRequest(action:any) {
    try {
        yield call(shipToAddApi, action);
        yield put(shipToAddSuccess(action.payload));
    } catch (error) {
        console.error(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS,
            message: error.message
        }));
        yield put(shipToAddFailure(error));
    }
}

export const shipToAddApi = (action:any) => {

    const shipTo:IShipTo = action.payload;
    const url:string = "/api/ShipTo/Add/";

    console.log("shipToAddApi: " + url + " " + JSON.stringify(shipTo));
    console.log("ShipTo", shipTo)
    
    return axios.post(url, shipTo);
};

function* shipToUpdateRequest(action:any) {
    try {
        yield call(shipToUpdateApi, action);
        yield put(shipToUpdateSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(shipToUpdateFailure(error));
    }
}

export const shipToUpdateApi = (action:any) => {

    const shipTo:IShipTo = action.payload;
    const url:string = "/api/ShipTo/Update/";
    console.log("shipToUpdateApi: " + url);

    return axios.put(url, shipTo);
};

function* shipToDeleteRequest(action: any) {
    try {
        yield call(shipToDeleteApi, action);
        yield put(shipToDeleteSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(shipToDeleteFailure(error));
    }
}

export const shipToDeleteApi = (action:any) => {

    const shipTo:IShipTo = action.payload;
    const url:string = "/api/ShipTo/Delete/" // + shipTo.TP_PartID;
    console.log("shipToDeleteApi: " + url);

    return axios.delete(url, { data: shipTo });
};

export default function* rootSaga() {
    yield all([
        takeLatest(SHIPTO_GET_ALL, shipToGetAllRequest),
        takeLatest(SHIPTO_ADD, shipToAddRequest),
        takeLatest(SHIPTO_UPDATE, shipToUpdateRequest),
        takeLatest(SHIPTO_DELETE, shipToDeleteRequest)
    ]);
}
