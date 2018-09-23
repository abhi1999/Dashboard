import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from "../configs/axios";
import { FixURIComponent } from "../configs/axios"
import { SERVICES } from '../configs';
import * as VPCrypt from '../utils/VPEncryption';
import { VPNETWORK_GET_ALL, VPNETWORK_ADD, VPNETWORK_UPDATE, VPNETWORK_DELETE } from '../constants/ActionTypes';
import * as vpNetworksActions from '../actions/VpNetworksAction';
import Notifications from 'react-notification-system-redux';
import { ERROR_OPTIONS } from '../constants/ServiceParameters';
import buildQuery from "odata-query";
import { INetwork } from "../constants/edidb";

function* vpnetworkGetAllRequest(action:any) {
    try {
        const networkList:any = yield call(vpnetworkGetAllApi, action);
        networkList.data.value.map((n1:INetwork) => {
            if (n1.VanPass.length > 0){                 
                if (n1.VanPass.charCodeAt(0) === 1) {
                    // Encrypted password, so decode it
                    n1.VanPass = VPCrypt.XORDecrypt(n1.Van_ID + n1.Van_ID + n1.Van_ID, n1.VanPass);
                }
            }
        });
        const configList:string[] = yield call(vpnetworkGetConfigsApi, action)
        yield put(vpNetworksActions.vpnetworkGetAllSuccess(networkList, configList));
    } 
    catch (xer) {
        yield put(Notifications.error({ ...ERROR_OPTIONS,
            message: xer.message
        })); 
        yield put(vpNetworksActions.vpnetworkGetAllFailure(xer.message));
    }
}

export const vpnetworkGetConfigsApi = (action:any) => {
    const url:string = SERVICES.endpoints.networkConfigs;
    return axios.get(url);
}

export const vpnetworkGetAllApi = (action:any) => {

    const endpoint:string =  SERVICES.endpoints.networkset;
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

function* vpnetworkAddRequest(action:any) {
    try {
        yield call(vpnetworkAddApi, action);
        yield put(vpNetworksActions.vpnetworkAddSuccess(action.payload));
    } catch (error) {
        console.error(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS,
            message: error.message
        }));
        yield put(vpNetworksActions.vpnetworkAddFailure(error));
    }
}

export const vpnetworkAddApi = (action:any) => {

    // Copy the payload so the original data is not changed
    const network:INetwork = { ...action.payload };
    // Encrypt the password before it goes over the wire to the API
    network.VanPass = VPCrypt.XOREncrypt(network.Van_ID, network.VanPass);
    
    const url:string =  SERVICES.endpoints.networkset;

    return axios.post(url, network);
};

function* vpnetworkUpdateRequest(action:any) {
    try {
        yield call(vpnetworkUpdateApi, action);
        yield put(vpNetworksActions.vpnetworkUpdateSuccess(action.payload));
    } catch (error) {
        console.error(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS,
            message: error.message
        }));
        yield put(vpNetworksActions.vpnetworkUpdateFailure(error));
    }
}

export const vpnetworkUpdateApi = (action:any) => {

    // Copy the payload so the original data is not changed
    const network:INetwork = { ...action.payload };
    // Encrypt the password before it goes over the wire to the API
    network.VanPass = VPCrypt.XOREncrypt(network.Van_ID, network.VanPass);
    const url:string = SERVICES.endpoints.networkset + "('" + encodeURIComponent(network.Van_ID) + "')";

    return axios.put(url, network);
};

function* vpnetworkDeleteRequest(action:any) {
    try {
        yield call(vpnetworkDeleteApi, action);
        yield put(vpNetworksActions.vpnetworkDeleteSuccess(action.payload));
    } catch (error) {
        console.error(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS,
            message: error.message
        }));
        yield put(vpNetworksActions.vpnetworkDeleteFailure(error));
    }
}


export const vpnetworkDeleteApi = (action:any) => {
    const network:INetwork = action.payload;
    const url:string = SERVICES.endpoints.networkset + "('" + encodeURIComponent(network.Van_ID) + "')";

    return axios.delete(url);
};

export default function* rootSaga() {
    yield all([
        takeLatest(VPNETWORK_GET_ALL, vpnetworkGetAllRequest),
        takeLatest(VPNETWORK_ADD, vpnetworkAddRequest),
        takeLatest(VPNETWORK_UPDATE, vpnetworkUpdateRequest),
        takeLatest(VPNETWORK_DELETE, vpnetworkDeleteRequest)
    ]);
}