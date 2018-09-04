import {
    all,
    call,
    put,
    takeLatest
} from 'redux-saga/effects';
import axios from "axios";
import {
    CARRIER_GET_ALL,
    CARRIER_ADD,
    CARRIER_UPDATE,
    CARRIER_DELETE
} from '../constants/ActionTypes';
import {
    BASE_URL
} from "../configs";
import {
    carrierGetAllSuccess,
    carrierGetAllFailure
} from '../actions/CarrierAction';
import {
    carrierAddSuccess,
    carrierAddFailure
} from '../actions/CarrierAction';
import {
    carrierUpdateSuccess,
    carrierUpdateFailure
} from '../actions/CarrierAction';
import {
    carrierDeleteSuccess,
    carrierDeleteFailure
} from '../actions/CarrierAction';
import Notifications from 'react-notification-system-redux';
import {
    ERROR_OPTIONS
} from '../constants/ServiceParameters';
import buildQuery from "odata-query";
import ShipViaModel from "../constants/implementations/ShipViaModel";


function* carrierGetAllRequest(action:any) {
    try {
        const carrierList:any= yield call(carrierGetAllApi, action);
        yield put(carrierGetAllSuccess(carrierList));
    } catch (error) {
        yield put(Notifications.error({ ...ERROR_OPTIONS,
            message: error.config.url
        }));
        yield put(carrierGetAllFailure(error));
    }
}

export const carrierGetAllApi = (action:any) => {

    const endpoint:string = BASE_URL + "/odata/ShipViaSet";
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

    console.log("carrierGetAllApi: " + url);
    return axios.get(url);
};

function* carrierAddRequest(action:any) {
    try {
        yield call(carrierAddApi, action);
        yield put(carrierAddSuccess(action.payload));
    } catch (error) {
        console.error(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS,
            message: error.config.url
        }));
        yield put(carrierAddFailure(error));
    }
}

export const carrierAddApi = (action:any) => {

    const carrier:ShipViaModel = action.payload;
    const url:string = BASE_URL + "/api/ShipVia/Add/";

    console.log("carrierAddApi: " + url);
    return axios.post(url, carrier);
};

function* carrierUpdateRequest(action:any) {
    try {
        yield call(carrierUpdateApi, action);
        yield put(carrierUpdateSuccess(action.payload));
    } catch (error) {
        console.error(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS,
            message: error.config.url
        }));
        yield put(carrierUpdateFailure(error));
    }
}

export const carrierUpdateApi = (action:any) => {

    const carrier:ShipViaModel = action.payload;
    const url:string = BASE_URL + "/api/ShipVia/Update/" + carrier.Ship_Via_ID;

    console.log("carrierUpdateApi: " + url);
    return axios.put(url, carrier);
};

function* carrierDeleteRequest(action:any) {
    try {
        yield call(carrierDeleteApi, action);
        yield put(carrierDeleteSuccess(action.payload));
    } catch (error) {
        console.error(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS,
            message: error.config.url
        }));
        yield put(carrierDeleteFailure(error));
    }
}


export const carrierDeleteApi = (action:any) => {

    const carrier:ShipViaModel = action.payload;
    const url:string = BASE_URL + "/api/ShipVia/Delete/" + carrier.Ship_Via_ID;
    
    console.log("carrierDeleteApi: " + url);
    return axios.delete(url);
};

export default function* rootSaga() {
    yield all([
        takeLatest(CARRIER_GET_ALL, carrierGetAllRequest),
        takeLatest(CARRIER_ADD, carrierAddRequest),
        takeLatest(CARRIER_UPDATE, carrierUpdateRequest),
        takeLatest(CARRIER_DELETE, carrierDeleteRequest)
    ]);
}