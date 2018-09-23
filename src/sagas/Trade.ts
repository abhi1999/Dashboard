import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from "../configs/axios";
import { 
    TRADE_GET_ALL,
    TRADE_ADD,
    TRADE_UPDATE,
    TRADE_DELETE,
    TRADE_UPDATE_MAPS
} from './../constants/ActionTypes';
import { FixURIComponent } from "../configs/axios"
import { kitTypeGetAllApi} from '../sagas/KitType'
import { kitTypeGetAllSuccess } from './../actions/KitTypeAction';
import { ediDocGroupGetAllApi } from '../sagas/EdiDocGroupSaga';
import { ediDocGroupGetAllSuccess } from './../actions/EdiDocGroupAction';
import { tradeNetworkGetAllApi } from '../sagas/TradeNetworkSaga'
import { tradeNetworkGetAllSuccess } from '../actions/TradeNetworkAction'
import { tradeGetAllSuccess, tradeGetAllFailure, tradeUpdateMaps } from '../actions/Trade';
import { tradeAddSuccess, tradeAddFailure } from '../actions/Trade';
import { tradeUpdateSuccess, tradeUpdateFailure } from '../actions/Trade';
import { tradeDeleteSuccess, tradeDeleteFailure } from '../actions/Trade';
import { tradeUpdateMapsSuccess, tradeUpdateMapsFailure } from '../actions/Trade'
import Notifications from 'react-notification-system-redux';
import { ERROR_OPTIONS } from './../constants/ServiceParameters';
import buildQuery from "odata-query";
import {ITrade} from "./../constants/edidb";
import {MapSetting} from "./../constants/MapSetting"

function* tradeGetAllRequest(action:any) {
    try {
        const kitTypeList = yield call(kitTypeGetAllApi)
        yield put(kitTypeGetAllSuccess(kitTypeList));
        const ediDocGroupList = yield call(ediDocGroupGetAllApi)
        yield put(ediDocGroupGetAllSuccess(ediDocGroupList))
        const tradeNetworkList = yield call(tradeNetworkGetAllApi)
        yield put(tradeNetworkGetAllSuccess(tradeNetworkList));
        const tradeList:any = yield call(tradeGetAllApi, action);
        yield put(tradeGetAllSuccess(tradeList));
    } catch (error) {
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(tradeGetAllFailure(error));
    }
}

export const tradeGetAllApi = (action:any) => {

    const endpoint:string = "/odata/TradeSet";
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

    // const filter:string[] = [];
    // if (action.payload.filtered) {
    //     action.payload.filtered.map((f:any) => {
    //         const column:string = "contains(" + f.id + ", '" + f.value + "')";
    //         filter.push(column);
    //     });
    // }
    const filter:string[] = [];
    if (action.payload.filtered) {
       
        action.payload.filtered.map((f:any) => {
            console.log("FILTER", f.value, typeof(f.value))
            if (typeof(f.value) === 'number')
            {
                const numCol:string = f.id + ' eq ' + f.value;
                filter.push(numCol);
            }
            else if (typeof(f.value) === 'boolean') {
                let boolCol:string;
                if (f.value) {
                    boolCol = f.id + ' eq true';
                }
                else {
                    boolCol = f.id + ' eq false';
                }
                filter.push(boolCol);
            }
            else {
                const column:string = "contains(" + f.id + ", '" + FixURIComponent(f.value) + "')";
                filter.push(column);
            }
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

    return axios.get(url);
};

function* tradeAddRequest(action:any) {
    try {
        yield call(tradeAddApi, action);
        yield put(tradeAddSuccess(action.payload));
    } catch (error) {
        console.error(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(tradeAddFailure(error));
    }
}

export const tradeAddApi = (action) => {

    const trade:ITrade = action.payload;
    const url:string = "/api/Trades/Add/";

    return axios.post(url, trade);
};

function* tradeUpdateRequest(action:any) {
    try {
        yield call(tradeUpdateApi, action);
        yield put(tradeUpdateSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(tradeUpdateFailure(error));
    }
}

export const tradeUpdateApi = (action:any) => {

    const trade:ITrade = action.payload;
    const url:string = "/api/Trades/Update/";

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
    const url:string = "/api/Trades/Delete/" + trade.TP_PartID;

    return axios.delete(url);
};

function* tradeUpdateMapsRequest(action:any) {
    try {
        yield call(tradeUpdateMapsApi, action);
        yield put(tradeUpdateMapsSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(tradeUpdateMapsFailure(error));
    }
}

export const tradeUpdateMapsApi = (action:any) => {

    const mapSettingList:MapSetting[] = action.payload;
    const url:string = "/api/Trades/UpdateMaps/";

    return axios.put(url, mapSettingList);
};

export default function* rootSaga() {
    yield all([
        takeLatest(TRADE_GET_ALL, tradeGetAllRequest),
        takeLatest(TRADE_ADD, tradeAddRequest),
        takeLatest(TRADE_UPDATE, tradeUpdateRequest),
        takeLatest(TRADE_DELETE, tradeDeleteRequest),
        takeLatest(TRADE_UPDATE_MAPS, tradeUpdateMapsRequest)
    ]);
}
