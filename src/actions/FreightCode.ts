import { 
    FREIGHT_CODE_GET_ALL, 
    FREIGHT_CODE_GET_ALL_SUCCESS, 
    FREIGHT_CODE_GET_ALL_FAILURE, 
    FREIGHT_CODE_ADD, 
    FREIGHT_CODE_ADD_SUCCESS, 
    FREIGHT_CODE_ADD_FAILURE, 
    FREIGHT_CODE_UPDATE, 
    FREIGHT_CODE_UPDATE_SUCCESS, 
    FREIGHT_CODE_UPDATE_FAILURE,
    FREIGHT_CODE_DELETE, 
    FREIGHT_CODE_DELETE_SUCCESS, 
    FREIGHT_CODE_DELETE_FAILURE 
} from './../constants/ActionTypes';

import FreightCode from "../constants/implementations/FreightCode";
import ODataParams from '../constants/params/oDataParams';

export const freightCodeGetAll = (params:ODataParams) => {
    return {
        type: FREIGHT_CODE_GET_ALL,
        payload: params
    };
};

export const freightCodeGetAllSuccess = (freightCodeList:FreightCode[]) => {
    return {
        type: FREIGHT_CODE_GET_ALL_SUCCESS,
        payload: freightCodeList
    }
};

export const freightCodeGetAllFailure = (error) => {
    return {
        type: FREIGHT_CODE_GET_ALL_FAILURE,
        payload: error
    }
};

export const freightCodeAdd = (freightCode:FreightCode) => {
    return {
        type: FREIGHT_CODE_ADD,
        payload: freightCode
    };
};

export const freightCodeAddSuccess = (freightCode:FreightCode) => {
    return {
        type: FREIGHT_CODE_ADD_SUCCESS,
        payload: freightCode
    }
};

export const freightCodeAddFailure = (error) => {
    return {
        type: FREIGHT_CODE_ADD_FAILURE,
        payload: error
    }
};

export const freightCodeUpdate = (freightCode:FreightCode) => {
    return {
        type: FREIGHT_CODE_UPDATE,
        payload: freightCode
    };
};

export const freightCodeUpdateSuccess = (freightCode:FreightCode) => {
    return {
        type: FREIGHT_CODE_UPDATE_SUCCESS,
        payload: freightCode
    }
};

export const freightCodeUpdateFailure = (error) => {
    return {
        type: FREIGHT_CODE_UPDATE_FAILURE,
        payload: error
    }
};

export const freightCodeDelete = (freightCode:FreightCode) => {
    return {
        type: FREIGHT_CODE_DELETE,
        payload: freightCode
    };
};

export const freightCodeDeleteSuccess = (freightCode:FreightCode) => {
    return {
        type: FREIGHT_CODE_DELETE_SUCCESS,
        payload: freightCode
    }
};

export const freightCodeDeleteFailure = (error) => {
    return {
        type: FREIGHT_CODE_DELETE_FAILURE,
        payload: error
    }
};
