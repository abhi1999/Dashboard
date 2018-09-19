import { 
    TRADE_GET_ALL, 
    TRADE_GET_ALL_SUCCESS, 
    TRADE_GET_ALL_FAILURE, 
    TRADE_ADD, 
    TRADE_ADD_SUCCESS, 
    TRADE_ADD_FAILURE,
    TRADE_UPDATE, 
    TRADE_UPDATE_SUCCESS, 
    TRADE_UPDATE_FAILURE,
    TRADE_DELETE, 
    TRADE_DELETE_SUCCESS, 
    TRADE_DELETE_FAILURE,
    TRADE_UPDATE_MAPS,
    TRADE_UPDATE_MAPS_SUCCESS,
    TRADE_UPDATE_MAPS_FAILURE
} from './../constants/ActionTypes';

import { ITrade } from '../constants/edidb'
import { MapSetting } from '../constants/MapSetting'

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
export const tradeAdd = (trade:ITrade) => {
    return {
        type: TRADE_ADD,
        payload: trade
    };
};

export const tradeAddSuccess = (trade:ITrade) => {
    return {
        type: TRADE_ADD_SUCCESS,
        payload: trade
    }
};

export const tradeAddFailure = (error) => {
    return {
        type: TRADE_ADD_FAILURE,
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

export const tradeUpdateMaps = (mapSettingsList:MapSetting[]) => {
    return {
        type: TRADE_UPDATE_MAPS,
        payload: mapSettingsList
    }
};

export const tradeUpdateMapsSuccess = (mapStatus:any) => {
    return {
        type: TRADE_UPDATE_MAPS_SUCCESS,
        payload: mapStatus
    }
};

export const tradeUpdateMapsFailure = (error) => {
    return {
        type: TRADE_UPDATE_MAPS_FAILURE,
        payload: error
    }
};