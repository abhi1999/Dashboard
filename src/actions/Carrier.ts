
import { 
    CARRIER_GET_ALL, 
    CARRIER_GET_ALL_SUCCESS, 
    CARRIER_GET_ALL_FAILURE, 
    CARRIER_ADD, 
    CARRIER_ADD_SUCCESS, 
    CARRIER_ADD_FAILURE, 
    CARRIER_UPDATE, 
    CARRIER_UPDATE_SUCCESS, 
    CARRIER_UPDATE_FAILURE,
    CARRIER_DELETE, 
    CARRIER_DELETE_SUCCESS, 
    CARRIER_DELETE_FAILURE 
} from './../constants/ActionTypes';
import ShipVia from "../constants/implementations/ShipVia";
import ODataParams from '../constants/params/oDataParams';

export const carrierGetAll = (params:ODataParams) => {
    return {
        type: CARRIER_GET_ALL,
        payload: params
    };
};

export const carrierGetAllSuccess = (carrierList:ShipVia[]) => {
    return {
        type: CARRIER_GET_ALL_SUCCESS,
        payload: carrierList
    }
};

export const carrierGetAllFailure = (error) => {
    return {
        type: CARRIER_GET_ALL_FAILURE,
        payload: error
    }
};

export const carrierAdd = (carrier:ShipVia) => {
    return {
        type: CARRIER_ADD,
        payload: carrier
    };
};

export const carrierAddSuccess = (carrier:ShipVia) => {
    return {
        type: CARRIER_ADD_SUCCESS,
        payload: carrier
    }
};

export const carrierAddFailure = (error) => {
    return {
        type: CARRIER_ADD_FAILURE,
        payload: error
    }
};

export const carrierUpdate = (carrier:ShipVia) => {
    return {
        type: CARRIER_UPDATE,
        payload: carrier
    };
};

export const carrierUpdateSuccess = (carrier:ShipVia) => {
    return {
        type: CARRIER_UPDATE_SUCCESS,
        payload: carrier
    }
};

export const carrierUpdateFailure = (error) => {
    return {
        type: CARRIER_UPDATE_FAILURE,
        payload: error
    }
};

export const carrierDelete = (carrier:ShipVia) => {
    return {
        type: CARRIER_DELETE,
        payload: carrier
    };
};

export const carrierDeleteSuccess = (carrier:ShipVia) => {
    return {
        type: CARRIER_DELETE_SUCCESS,
        payload: carrier
    }
};

export const carrierDeleteFailure = (error) => {
    return {
        type: CARRIER_DELETE_FAILURE,
        payload: error
    }
};
