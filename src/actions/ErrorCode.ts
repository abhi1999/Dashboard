import { 
    ERRORCODE_GET_ALL, 
    ERRORCODE_GET_ALL_SUCCESS, 
    ERRORCODE_GET_ALL_FAILURE, 
    ERRORCODE_ADD, 
    ERRORCODE_ADD_SUCCESS, 
    ERRORCODE_ADD_FAILURE, 
    ERRORCODE_UPDATE, 
    ERRORCODE_UPDATE_SUCCESS, 
    ERRORCODE_UPDATE_FAILURE,
    ERRORCODE_DELETE, 
    ERRORCODE_DELETE_SUCCESS, 
    ERRORCODE_DELETE_FAILURE 
} from './../constants/ActionTypes';

export const errorCodeGetAll = (params) => {
    return {
        type: ERRORCODE_GET_ALL,
        payload: params
    };
};

export const errorCodeGetAllSuccess = (errorCodeList) => {
    return {
        type: ERRORCODE_GET_ALL_SUCCESS,
        payload: errorCodeList
    }
};

export const errorCodeGetAllFailure = (error) => {
    return {
        type: ERRORCODE_GET_ALL_FAILURE,
        payload: error
    }
};

export const errorCodeAdd = (errorCode) => {
    return {
        type: ERRORCODE_ADD,
        payload: errorCode
    };
};

export const errorCodeAddSuccess = (errorCode) => {
    return {
        type: ERRORCODE_ADD_SUCCESS,
        payload: errorCode
    }
};

export const errorCodeAddFailure = (error) => {
    return {
        type: ERRORCODE_ADD_FAILURE,
        payload: error
    }
};

export const errorCodeUpdate = (errorCode) => {
    return {
        type: ERRORCODE_UPDATE,
        payload: errorCode
    };
};

export const errorCodeUpdateSuccess = (errorCode) => {
    return {
        type: ERRORCODE_UPDATE_SUCCESS,
        payload: errorCode
    }
};

export const errorCodeUpdateFailure = (error) => {
    return {
        type: ERRORCODE_UPDATE_FAILURE,
        payload: error
    }
};

export const errorCodeDelete = (errorCode) => {
    return {
        type: ERRORCODE_DELETE,
        payload: errorCode
    };
};

export const errorCodeDeleteSuccess = (errorCode) => {
    return {
        type: ERRORCODE_DELETE_SUCCESS,
        payload: errorCode
    }
};

export const errorCodeDeleteFailure = (error) => {
    return {
        type: ERRORCODE_DELETE_FAILURE,
        payload: error
    }
};
