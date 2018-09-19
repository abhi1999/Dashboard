import { 
    PSEUDO_TRADE_GET_ALL, 
    PSEUDO_TRADE_GET_ALL_SUCCESS, 
    PSEUDO_TRADE_GET_ALL_FAILURE
} from './../constants/ActionTypes';

// import { IKitType } from '../constants/edidb'
import ODataParams from '../constants/params/oDataParams';

export const pseudoTradeGetAll = (params:ODataParams) => {
    return {
        type: PSEUDO_TRADE_GET_ALL,
        payload: params
    };
};

export const pseudoTradeGetAllSuccess = (pseudoTradeList:any[]) => {
    return {
        type: PSEUDO_TRADE_GET_ALL_SUCCESS,
        payload:pseudoTradeList
    }
};

export const pseudoTradeGetAllFailure = (error) => {
    return {
        type: PSEUDO_TRADE_GET_ALL_FAILURE,
        payload: error
    }
};

