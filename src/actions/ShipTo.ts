import { 
    SHIPTO_GET_ALL, 
    SHIPTO_GET_ALL_SUCCESS, 
    SHIPTO_GET_ALL_FAILURE, 
    SHIPTO_ADD,
    SHIPTO_ADD_SUCCESS,
    SHIPTO_ADD_FAILURE,
    SHIPTO_UPDATE, 
    SHIPTO_UPDATE_SUCCESS, 
    SHIPTO_UPDATE_FAILURE,
    SHIPTO_DELETE, 
    SHIPTO_DELETE_SUCCESS, 
    SHIPTO_DELETE_FAILURE 
} from './../constants/ActionTypes';

import { IShipTo } from '../constants/edidb'
import ODataParams from '../constants/params/oDataParams';

export const shipToGetAll = ( params:ODataParams ) => {
    return {
        type: SHIPTO_GET_ALL,
        payload: params
    };
};

export const shipToGetAllSuccess = (shipToList:IShipTo[]) => {
    return {
        type: SHIPTO_GET_ALL_SUCCESS,
        payload: shipToList
    }
};

export const shipToGetAllFailure = (error) => {
    return {
        type: SHIPTO_GET_ALL_FAILURE,
        payload: error
    }
};

export const shipToAdd = (shipTo:IShipTo) => {
    return {
        type: SHIPTO_ADD,
        payload: shipTo
    };
};

export const shipToAddSuccess = (shipTo:IShipTo) => {
    return {
        type: SHIPTO_ADD_SUCCESS,
        payload: shipTo
    }
};

export const shipToAddFailure = (error) => {
    return {
        type: SHIPTO_ADD_FAILURE,
        payload: error
    }
};

export const shipToUpdate = (shipTo:IShipTo) => {
    return {
        type: SHIPTO_UPDATE,
        payload: shipTo
    };
};

export const shipToUpdateSuccess = (shipTo:IShipTo) => {
    return {
        type: SHIPTO_UPDATE_SUCCESS,
        payload: shipTo
    }
};

export const shipToUpdateFailure = (error) => {
    return {
        type: SHIPTO_UPDATE_FAILURE,
        payload: error
    }
};

export const shipToDelete = (shipTo:IShipTo) => {
    return {
        type: SHIPTO_DELETE,
        payload: shipTo
    };
};

export const shipToDeleteSuccess = (shipTo:IShipTo) => {
    return {
        type: SHIPTO_DELETE_SUCCESS,
        payload: shipTo
    }
};

export const shipToDeleteFailure = (error) => {
    return {
        type: SHIPTO_DELETE_FAILURE,
        payload: error
    }
};

