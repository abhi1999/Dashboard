import { 
    VARIABLE_GET_ALL, 
    VARIABLE_GET_ALL_SUCCESS, 
    VARIABLE_GET_ALL_FAILURE, 
    VARIABLE_ADD, 
    VARIABLE_ADD_SUCCESS, 
    VARIABLE_ADD_FAILURE, 
    VARIABLE_UPDATE, 
    VARIABLE_UPDATE_SUCCESS, 
    VARIABLE_UPDATE_FAILURE,
    VARIABLE_DELETE, 
    VARIABLE_DELETE_SUCCESS, 
    VARIABLE_DELETE_FAILURE 
} from '../../constants/ActionTypes';

export const variableGetAll = () => {
    return {
        type: VARIABLE_GET_ALL
    };
};

export const variableGetAllSuccess = (variableList) => {
    return {
        type: VARIABLE_GET_ALL_SUCCESS,
        payload: variableList
    }
};

export const variableGetAllFailure = (error) => {
    return {
        type: VARIABLE_GET_ALL_FAILURE,
        payload: error
    }
};

export const variableAdd = (variable) => {
    return {
        type: VARIABLE_ADD,
        payload: variable
    };
};

export const variableAddSuccess = (variable) => {
    return {
        type: VARIABLE_ADD_SUCCESS,
        payload: variable
    }
};

export const variableAddFailure = (error) => {
    return {
        type: VARIABLE_ADD_FAILURE,
        payload: error
    }
};

export const variableUpdate = (variable) => {
    return {
        type: VARIABLE_UPDATE,
        payload: variable
    };
};

export const variableUpdateSuccess = (variable) => {
    return {
        type: VARIABLE_UPDATE_SUCCESS,
        payload: variable
    }
};

export const variableUpdateFailure = (error) => {
    return {
        type: VARIABLE_UPDATE_FAILURE,
        payload: error
    }
};

export const variableDelete = (variable) => {
    return {
        type: VARIABLE_DELETE,
        payload: variable
    };
};

export const variableDeleteSuccess = (variable) => {
    return {
        type: VARIABLE_DELETE_SUCCESS,
        payload: variable
    }
};

export const variableDeleteFailure = (error) => {
    return {
        type: VARIABLE_DELETE_FAILURE,
        payload: error
    }
};
