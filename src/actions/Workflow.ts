import { 
    WORKFLOW_GET_ALL, 
    WORKFLOW_GET_ALL_SUCCESS, 
    WORKFLOW_GET_ALL_FAILURE, 
    WORKFLOW_ADD, 
    WORKFLOW_ADD_SUCCESS, 
    WORKFLOW_ADD_FAILURE, 
    WORKFLOW_UPDATE, 
    WORKFLOW_UPDATE_SUCCESS, 
    WORKFLOW_UPDATE_FAILURE,
    WORKFLOW_DELETE, 
    WORKFLOW_DELETE_SUCCESS, 
    WORKFLOW_DELETE_FAILURE 
} from './../constants/ActionTypes';

export const workflowGetAll = () => {
    return {
        type: WORKFLOW_GET_ALL
    };
};

export const workflowGetAllSuccess = (workflowList) => {
    return {
        type: WORKFLOW_GET_ALL_SUCCESS,
        payload: workflowList
    }
};

export const workflowGetAllFailure = (error) => {
    return {
        type: WORKFLOW_GET_ALL_FAILURE,
        payload: error
    }
};

export const workflowAdd = (workflow) => {
    return {
        type: WORKFLOW_ADD,
        payload: workflow
    };
};

export const workflowAddSuccess = (workflow) => {
    return {
        type: WORKFLOW_ADD_SUCCESS,
        payload: workflow
    }
};

export const workflowAddFailure = (error) => {
    return {
        type: WORKFLOW_ADD_FAILURE,
        payload: error
    }
};

export const workflowUpdate = (workflow) => {
    return {
        type: WORKFLOW_UPDATE,
        payload: workflow
    };
};

export const workflowUpdateSuccess = (workflow) => {
    return {
        type: WORKFLOW_UPDATE_SUCCESS,
        payload: workflow
    }
};

export const workflowUpdateFailure = (error) => {
    return {
        type: WORKFLOW_UPDATE_FAILURE,
        payload: error
    }
};

export const workflowDelete = (workflow) => {
    return {
        type: WORKFLOW_DELETE,
        payload: workflow
    };
};

export const workflowDeleteSuccess = (workflow) => {
    return {
        type: WORKFLOW_DELETE_SUCCESS,
        payload: workflow
    }
};

export const workflowDeleteFailure = (error) => {
    return {
        type: WORKFLOW_DELETE_FAILURE,
        payload: error
    }
};
