import { 
    TRADE_GET_ALL, 
    TRADE_GET_ALL_SUCCESS, 
    TRADE_GET_ALL_FAILURE, 
    TRADE_UPDATE, 
    TRADE_UPDATE_SUCCESS, 
    TRADE_UPDATE_FAILURE,
    TRADE_DELETE, 
    TRADE_DELETE_SUCCESS, 
    TRADE_DELETE_FAILURE 
} from './../constants/ActionTypes';

import { ITrade } from '../constants/edidb'
import ODataParams from '../constants/params/oDataParams';

export const tradeGetAll = (params:ODataParams) => {
    return {
        type: TRADE_GET_ALL,
        payload: params
    };
};

export const tradeGetAllSuccess = (tradeList:ITrade[]) => {
    return {
        type: TRADE_GET_ALL_SUCCESS,
        payload: tradeList
    }
};

export const tradeGetAllFailure = (error) => {
    return {
        type: TRADE_GET_ALL_FAILURE,
        payload: error
    }
};

export const tradeUpdate = (trade:ITrade) => {
    return {
        type: TRADE_UPDATE,
        payload: trade
    };
};

export const tradeUpdateSuccess = (trade:ITrade) => {
    return {
        type: TRADE_UPDATE_SUCCESS,
        payload: trade
    }
};

export const tradeUpdateFailure = (error) => {
    return {
        type: TRADE_UPDATE_FAILURE,
        payload: error
    }
};

export const tradeDelete = (trade:ITrade) => {
    return {
        type: TRADE_DELETE,
        payload: trade
    };
};

export const tradeDeleteSuccess = (trade:ITrade) => {
    return {
        type: TRADE_DELETE_SUCCESS,
        payload: trade
    }
};

export const tradeDeleteFailure = (error) => {
    return {
        type: TRADE_DELETE_FAILURE,
        payload: error
    }
};
