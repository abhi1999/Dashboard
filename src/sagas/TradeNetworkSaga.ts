import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from "../configs/axios";
import { 
    TRADE_NETWORK_GET_ALL
} from './../constants/ActionTypes';
import { tradeNetworkGetAllSuccess, tradeNetworkGetAllFailure } from '../actions/TradeNetworkAction';
import Notifications from 'react-notification-system-redux';
import { ERROR_OPTIONS } from './../constants/ServiceParameters';

function* tradeNetworkGetAllRequest(action:any) {
    try {
        const tradeNetworkList:any = yield call(tradeNetworkGetAllApi, action);
        yield put(tradeNetworkGetAllSuccess(tradeNetworkList));
    } catch (error) {
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(tradeNetworkGetAllFailure(error));
    }
}

export const tradeNetworkGetAllApi = () => {

    const endpoint:string = "/odata/NetworkSet?&$select=Van_ID";
    const url:string = endpoint ; 

    console.log("tradeNetworkGetAllApi: " + url);
    return axios.get(url);
};

export default function* rootSaga() {
    yield all([
        takeLatest(TRADE_NETWORK_GET_ALL, tradeNetworkGetAllRequest),
    ]);
}
