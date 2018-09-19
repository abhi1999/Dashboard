import {
    all,
    call,
    put,
    takeLatest
} from 'redux-saga/effects';
import axios from "axios";
import {
    DOCUMENT_GET_ALL,
    DOCUMENT_ADD,
    DOCUMENT_UPDATE,
    DOCUMENT_DELETE
} from '../constants/ActionTypes';
import {
    documentGetAllSuccess,
    documentGetAllFailure
} from '../actions/DocumentAction';
import {
    documentAddSuccess,
    documentAddFailure
} from '../actions/DocumentAction';
import {
    documentUpdateSuccess,
    documentUpdateFailure
} from '../actions/DocumentAction';
import {
    documentDeleteSuccess,
    documentDeleteFailure
} from '../actions/DocumentAction';
import Notifications from 'react-notification-system-redux';
import {
    ERROR_OPTIONS
} from '../constants/ServiceParameters';
import buildQuery from "odata-query";
import ShipViaModel from "../constants/implementations/ShipViaModel";

function* documentGetAllRequest(action:any) {
    try {
        const documentList:any= yield call(documentGetAllApi, action);
        yield put(documentGetAllSuccess(documentList));
    } catch (error) {
        yield put(Notifications.error({ ...ERROR_OPTIONS,
            message: error.message
        }));
        yield put(documentGetAllFailure(error));
    }
}

export const documentGetAllApi = (action:any) => {

    const endpoint:string = "/odata/XMLDocSet";
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

    return axios.get(url);
};

function* documentAddRequest(action:any) {
    try {
        yield call(documentAddApi, action);
        yield put(documentAddSuccess(action.payload));
    } catch (error) {
        console.error(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS,
            message: error.message
        }));
        yield put(documentAddFailure(error));
    }
}

export const documentAddApi = (action:any) => {

    const document:ShipViaModel = action.payload;
    const url:string = "api/XMLDoc/AddXMLDoc";

    return axios.post(url, document);
};

function* documentUpdateRequest(action:any) {
    try {
        yield call(documentUpdateApi, action);
        yield put(documentUpdateSuccess(action.payload));
    } catch (error) {
        console.error(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS,
            message: error.message
        }));
        yield put(documentUpdateFailure(error));
    }
}

export const documentUpdateApi = (action:any) => {

    const document:ShipViaModel = action.payload;
    const url:string = "api/XMLDoc/UpdateXMLDoc";

    return axios.put(url, document);
};

function* documentDeleteRequest(action:any) {
    try {
        yield call(documentDeleteApi, action);
        yield put(documentDeleteSuccess(action.payload));
    } catch (error) {
        console.error(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS,
            message: error.config.url
        }));
        yield put(documentDeleteFailure(error));
    }
}


export const documentDeleteApi = (action:any) => {

    const document:ShipViaModel = action.payload;
    const url:string = "/api/ShipVia/DeleteXMLDoc" 
    
    return axios.delete(url);
};

export default function* rootSaga() {
    yield all([
        takeLatest(DOCUMENT_GET_ALL, documentGetAllRequest),
        takeLatest(DOCUMENT_ADD, documentAddRequest),
        takeLatest(DOCUMENT_UPDATE, documentUpdateRequest),
        takeLatest(DOCUMENT_DELETE, documentDeleteRequest)
    ]);
}