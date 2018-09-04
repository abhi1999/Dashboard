import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from "axios";
import { 
    TRADE_GET_ALL,
    TRADE_UPDATE,
    TRADE_DELETE
} from './../constants/ActionTypes';
import { BASE_URL } from "../configs";
import { kitTypeGetAllApi} from '../sagas/KitType'
import { kitTypeGetAllSuccess } from './../actions/KitTypeAction';
import { tradeGetAllSuccess, tradeGetAllFailure } from '../actions/Trade';
import { tradeUpdateSuccess, tradeUpdateFailure } from '../actions/Trade';
import { tradeDeleteSuccess, tradeDeleteFailure } from '../actions/Trade';
import Notifications from 'react-notification-system-redux';
import { ERROR_OPTIONS } from './../constants/ServiceParameters';
import buildQuery from "odata-query";
import {ITrade} from "./../constants/edidb";

function* tradeGetAllRequest(action:any) {
    try {
        const kitTypeList = yield call(kitTypeGetAllApi)
        yield put(kitTypeGetAllSuccess(kitTypeList));
        const tradeList:any = yield call(tradeGetAllApi, action);
        yield put(tradeGetAllSuccess(tradeList));
    } catch (error) {
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(tradeGetAllFailure(error));
    }
}

export const tradeGetAllApi = (action:any) => {

    const endpoint:string = BASE_URL + "/odata/TradeSet";
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

    const url:string = endpoint + oDataParams; 

    console.log("tradeGetAllApi: " + url);
    return axios.get(url);
};

function* tradeUpdateRequest(action:any) {
    try {
        yield call(tradeUpdateApi, action);
        yield put(tradeUpdateSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(tradeUpdateFailure(error));
    }
}

export const tradeUpdateApi = (action:any) => {

    const trade:ITrade = action.payload;
    const url:string = BASE_URL +  "/api/Trades/Update/";
    console.log("tradeUpdateApi: " + url);

    return axios.put(url, trade);
};

function* tradeDeleteRequest(action:any) {
    try {
        yield call(tradeDeleteApi, action);
        yield put(tradeDeleteSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(tradeDeleteFailure(error));
    }
  }


export const tradeDeleteApi = (action:any) => {

    const trade:ITrade = action.payload;
    const url:string = BASE_URL +  "/api/Trades/Delete/" + trade.TP_PartID;
    console.log("tradeDeleteApi: " + url);

    return axios.delete(url);
};

export default function* rootSaga() {
    yield all([
        takeLatest(TRADE_GET_ALL, tradeGetAllRequest),
        takeLatest(TRADE_UPDATE, tradeUpdateRequest),
        takeLatest(TRADE_DELETE, tradeDeleteRequest)
    ]);
}
