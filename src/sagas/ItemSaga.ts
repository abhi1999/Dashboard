import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from "../configs/axios";
import { ITEM_GET_ALL, ITEM_ADD, ITEM_UPDATE, ITEM_DELETE } from '../constants/ActionTypes';
import * as ItemActions from '../actions/ItemAction';
import Notifications from 'react-notification-system-redux';
import { ERROR_OPTIONS } from '../constants/ServiceParameters';
import buildQuery from "odata-query";
import { IItem } from "../constants/edidb";
import { SERVICES } from '../configs';


function* itemGetAllRequest(action:any) {
    try {
        const itemList:any= yield call(itemGetAllApi, action);
        yield put(ItemActions.itemGetAllSuccess(itemList));
    } catch (error) {
        yield put(Notifications.error({ ...ERROR_OPTIONS,
            message: error.message
        }));
        yield put(ItemActions.itemGetAllFailure(error));
    }
}

export const itemGetAllApi = (action:any) => {

    const endpoint:string = SERVICES.endpoints.itemset;
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
                const column:string = "contains(" + f.id + ", '" + f.value + "')";
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

function* itemAddRequest(action:any) {
    try {
        yield call(itemAddApi, action);
        yield put(ItemActions.itemAddSuccess(action.payload));
    } catch (error) {
        console.error(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS,
            message: error.message
        }));
        yield put(ItemActions.itemAddFailure(error));
    }
}

export const itemAddApi = (action:any) => {
    const item:IItem = action.payload;

    axios.post(SERVICES.endpoints.itemAdd + encodeURIComponent(item.Int_Item_No))
        .then((resp) => {
            return axios.post(SERVICES.endpoints.itemUpdate + encodeURIComponent(item.Int_Item_No), item);
        })
        .catch((error) => {
            return error;
        });
};

function* itemUpdateRequest(action:any) {
    try {
        yield call(itemUpdateApi, action);
        yield put(ItemActions.itemUpdateSuccess(action.payload));
    } catch (error) {
        console.error(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS,
            message: error.message
        }));
        yield put(ItemActions.itemUpdateFailure(error));
    }
}

export const itemUpdateApi = (action:any) => {

    const item:IItem = action.payload;

    return axios.post(SERVICES.endpoints.itemUpdate + item.Int_Item_No, item);
};



function* itemDeleteRequest(action:any) {
    try {
        yield call(itemDeleteApi, action);
        yield put(ItemActions.itemDeleteSuccess(action.payload));
    } catch (error) {
        console.error(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS,
            message: error.message
        }));
        yield put(ItemActions.itemDeleteFailure(error));
    }
}

export const itemDeleteApi = (action:any) => {

    const item:IItem = action.payload;

    return axios.delete(SERVICES.endpoints.itemDelete + item.Int_Item_No);
};

export default function* rootSaga() {
    yield all([
        takeLatest(ITEM_GET_ALL, itemGetAllRequest),
        takeLatest(ITEM_ADD, itemAddRequest),
        takeLatest(ITEM_UPDATE, itemUpdateRequest),
        takeLatest(ITEM_DELETE, itemDeleteRequest)
    ]);
}