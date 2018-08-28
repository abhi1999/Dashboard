import { 
    NETWORK_GET_ALL, 
    NETWORK_GET_ALL_SUCCESS, 
    NETWORK_GET_ALL_FAILURE, 
    NETWORK_ADD, 
    NETWORK_ADD_SUCCESS, 
    NETWORK_ADD_FAILURE, 
    NETWORK_UPDATE, 
    NETWORK_UPDATE_SUCCESS, 
    NETWORK_UPDATE_FAILURE,
    NETWORK_DELETE, 
    NETWORK_DELETE_SUCCESS, 
    NETWORK_DELETE_FAILURE 
} from './../constants/ActionTypes';

export const networkGetAll = () => {
    return {
        type: NETWORK_GET_ALL
    };
};

export const networkGetAllSuccess = (networkList) => {
    return {
        type: NETWORK_GET_ALL_SUCCESS,
        payload: networkList
    }
};

export const networkGetAllFailure = (error) => {
    return {
        type: NETWORK_GET_ALL_FAILURE,
        payload: error
    }
};

export const networkAdd = (network) => {
    return {
        type: NETWORK_ADD,
        payload: network
    };
};

export const networkAddSuccess = (network) => {
    return {
        type: NETWORK_ADD_SUCCESS,
        payload: network
    }
};

export const networkAddFailure = (error) => {
    return {
        type: NETWORK_ADD_FAILURE,
        payload: error
    }
};

export const networkUpdate = (network) => {
    return {
        type: NETWORK_UPDATE,
        payload: network
    };
};

export const networkUpdateSuccess = (network) => {
    return {
        type: NETWORK_UPDATE_SUCCESS,
        payload: network
    }
};

export const networkUpdateFailure = (error) => {
    return {
        type: NETWORK_UPDATE_FAILURE,
        payload: error
    }
};

export const networkDelete = (network) => {
    return {
        type: NETWORK_DELETE,
        payload: network
    };
};

export const networkDeleteSuccess = (network) => {
    return {
        type: NETWORK_DELETE_SUCCESS,
        payload: network
    }
};

export const networkDeleteFailure = (error) => {
    return {
        type: NETWORK_DELETE_FAILURE,
        payload: error
    }
};
