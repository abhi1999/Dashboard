import { 
    DOCUMENT_GET_ALL, 
    DOCUMENT_GET_ALL_SUCCESS, 
    DOCUMENT_GET_ALL_FAILURE, 
    DOCUMENT_GET_ONE, 
    DOCUMENT_GET_ONE_SUCCESS, 
    DOCUMENT_GET_ONE_FAILURE, 
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
import { IXMLDoc } from '../constants/edidb'
import ODataParams from '../constants/params/oDataParams';

export const documentGetAll = (params:ODataParams) => {
    return {
        type: DOCUMENT_GET_ALL,
        payload: params
    };
};

export const documentGetAllSuccess = (documentList:IXMLDoc[]) => {
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

export const documentGetOne = (id:string) => {
    return {
        type: DOCUMENT_GET_ONE,
        payload: id
    };
};

export const documentGetOneSuccess = (document:IXMLDoc) => {
    return {
        type: DOCUMENT_GET_ONE_SUCCESS,
        payload: document
    }
};

export const documentGetOneFailure = (error) => {
    return {
        type: DOCUMENT_GET_ONE_FAILURE,
        payload: error
    }
};

export const documentAdd = (document:IXMLDoc) => {
    return {
        type: DOCUMENT_ADD,
        payload: document
    };
};

export const documentAddSuccess = (document:IXMLDoc) => {
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

export const documentUpdate = (document:IXMLDoc) => {
    return {
        type: DOCUMENT_UPDATE,
        payload: document
    };
};

export const documentUpdateSuccess = (document:IXMLDoc) => {
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

export const documentDelete = (document:IXMLDoc) => {
    return {
        type: DOCUMENT_DELETE,
        payload: document
    };
};

export const documentDeleteSuccess = (document:IXMLDoc) => {
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
