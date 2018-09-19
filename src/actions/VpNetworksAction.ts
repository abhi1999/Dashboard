
import { 
    VPNETWORK_GET_ALL, 
    VPNETWORK_GET_ALL_SUCCESS, 
    VPNETWORK_GET_ALL_FAILURE, 
    VPNETWORK_ADD, 
    VPNETWORK_ADD_SUCCESS, 
    VPNETWORK_ADD_FAILURE, 
    VPNETWORK_UPDATE, 
    VPNETWORK_UPDATE_SUCCESS, 
    VPNETWORK_UPDATE_FAILURE,
    VPNETWORK_DELETE, 
    VPNETWORK_DELETE_SUCCESS, 
    VPNETWORK_DELETE_FAILURE 
} from '../constants/ActionTypes';
import { INetwork } from "../constants/edidb";

export const vpnetworkGetAll = (params:any) => {
    return {
        type: VPNETWORK_GET_ALL,
        payload: params
    };
};

export const vpnetworkGetAllSuccess = (networkPayload, configList) => {
    return {
        type: VPNETWORK_GET_ALL_SUCCESS,
        payload: { networkPayload, configList }
    }
};

export const vpnetworkGetAllFailure = (error) => {
    return {
        type: VPNETWORK_GET_ALL_FAILURE,
        payload: error
    }
};

export const vpnetworkAdd = (network:INetwork) => {
    return {
        type: VPNETWORK_ADD,
        payload: network
    };
};

export const vpnetworkAddSuccess = (network:INetwork) => {
    return {
        type: VPNETWORK_ADD_SUCCESS,
        payload: network
    }
};

export const vpnetworkAddFailure = (error) => {
    return {
        type: VPNETWORK_ADD_FAILURE,
        payload: error
    }
};

export const vpnetworkUpdate = (network:INetwork) => {
    return {
        type: VPNETWORK_UPDATE,
        payload: network
    };
};

export const vpnetworkUpdateSuccess = (network:INetwork) => {
    return {
        type: VPNETWORK_UPDATE_SUCCESS,
        payload: network
    }
};

export const vpnetworkUpdateFailure = (error) => {
    return {
        type: VPNETWORK_UPDATE_FAILURE,
        payload: error
    }
};

export const vpnetworkDelete = (network:INetwork) => {
    return {
        type: VPNETWORK_DELETE,
        payload: network
    };
};

export const vpnetworkDeleteSuccess = (network:INetwork) => {
    return {
        type: VPNETWORK_DELETE_SUCCESS,
        payload: network
    }
};

export const vpnetworkDeleteFailure = (error) => {
    return {
        type: VPNETWORK_DELETE_FAILURE,
        payload: error
    }
};
