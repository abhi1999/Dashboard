
import { 
    DOCUMENT_GET_ALL, 
    DOCUMENT_GET_ALL_SUCCESS, 
    DOCUMENT_GET_ALL_FAILURE, 
    DOCUMENT_ADD, 
    DOCUMENT_ADD_SUCCESS, 
    DOCUMENT_ADD_FAILURE, 
    DOCUMENT_UPDATE, 
    DOCUMENT_UPDATE_SUCCESS, 
    DOCUMENT_UPDATE_FAILURE,
    DOCUMENT_DELETE, 
    DOCUMENT_DELETE_SUCCESS, 
    DOCUMENT_DELETE_FAILURE 
} from '../constants/ActionTypes';
import ShipViaModel from "../constants/implementations/ShipViaModel";
import ODataParams from '../constants/params/oDataParams';

export const documentGetAll = (params:ODataParams) => {
    return {
        type: DOCUMENT_GET_ALL,
        payload: params
    };
};

export const documentGetAllSuccess = (documentList:ShipViaModel[]) => {
    return {
        type: DOCUMENT_GET_ALL_SUCCESS,
        payload: documentList
    }
};

export const documentGetAllFailure = (error) => {
    return {
        type: DOCUMENT_GET_ALL_FAILURE,
        payload: error
    }
};

export const documentAdd = (document:ShipViaModel) => {
    return {
        type: DOCUMENT_ADD,
        payload: document
    };
};

export const documentAddSuccess = (document:ShipViaModel) => {
    return {
        type: DOCUMENT_ADD_SUCCESS,
        payload: document
    }
};

export const documentAddFailure = (error) => {
    return {
        type: DOCUMENT_ADD_FAILURE,
        payload: error
    }
};

export const documentUpdate = (document:ShipViaModel) => {
    return {
        type: DOCUMENT_UPDATE,
        payload: document
    };
};

export const documentUpdateSuccess = (document:ShipViaModel) => {
    return {
        type: DOCUMENT_UPDATE_SUCCESS,
        payload: document
    }
};

export const documentUpdateFailure = (error) => {
    return {
        type: DOCUMENT_UPDATE_FAILURE,
        payload: error
    }
};

export const documentDelete = (document:ShipViaModel) => {
    return {
        type: DOCUMENT_DELETE,
        payload: document
    };
};

export const documentDeleteSuccess = (document:ShipViaModel) => {
    return {
        type: DOCUMENT_DELETE_SUCCESS,
        payload: document
    }
};

export const documentDeleteFailure = (error) => {
    return {
        type: DOCUMENT_DELETE_FAILURE,
        payload: error
    }
};
