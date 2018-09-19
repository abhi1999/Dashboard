import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from "../configs/axios";
import { 
    PSEUDO_TRADE_GET_ALL
} from './../constants/ActionTypes';
import { pseudoTradeGetAllSuccess, pseudoTradeGetAllFailure } from '../actions/PseudoTradeAction';
import Notifications from 'react-notification-system-redux';
import { ERROR_OPTIONS } from './../constants/ServiceParameters';

function* pseudoTradeGetAllRequest(action:any) {
    try {
        const pseudoTradeList:any = yield call(pseudoTradeGetAllApi, action);
        yield put(pseudoTradeGetAllSuccess(pseudoTradeList));
    } catch (error) {
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.config.url }));
        yield put(pseudoTradeGetAllFailure(error));
    }
}

export const pseudoTradeGetAllApi = (action:any) => {

    const endpoint:string = "/odata/TradeSet?&$select=TP_Name,TP_PartID&$orderby=TP_Name";
    const url:string = endpoint ; 

    console.log("pseudoTradeGetAllApi: " + url);
    return axios.get(url);
};

export default function* rootSaga() {
    yield all([
        takeLatest(PSEUDO_TRADE_GET_ALL, pseudoTradeGetAllRequest),
    ]);
}
