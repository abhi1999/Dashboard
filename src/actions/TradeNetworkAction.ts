import { 
    TRADE_NETWORK_GET_ALL, 
    TRADE_NETWORK_GET_ALL_SUCCESS, 
    TRADE_NETWORK_GET_ALL_FAILURE
} from './../constants/ActionTypes';

// import { IKitType } from '../constants/edidb'
import ODataParams from '../constants/params/oDataParams';

export const tradeNetworkGetAll = (params:ODataParams) => {
    return {
        type: TRADE_NETWORK_GET_ALL,
        payload: params
    };
};

export const tradeNetworkGetAllSuccess = (tradeNetworkList:any[]) => {
    return {
        type: TRADE_NETWORK_GET_ALL_SUCCESS,
        payload:tradeNetworkList
    }
};

export const tradeNetworkGetAllFailure = (error) => {
    return {
        type: TRADE_NETWORK_GET_ALL_FAILURE,
        payload: error
    }
};

