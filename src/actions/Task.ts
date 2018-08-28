import { 
    TASK_GET_ALL, 
    TASK_GET_ALL_SUCCESS, 
    TASK_GET_ALL_FAILURE, 
    TASK_ADD, 
    TASK_ADD_SUCCESS, 
    TASK_ADD_FAILURE, 
    TASK_UPDATE, 
    TASK_UPDATE_SUCCESS, 
    TASK_UPDATE_FAILURE,
    TASK_DELETE, 
    TASK_DELETE_SUCCESS, 
    TASK_DELETE_FAILURE 
} from './../constants/ActionTypes';

export const taskGetAll = () => {
    return {
        type: TASK_GET_ALL
    };
};

export const taskGetAllSuccess = (taskList) => {
    return {
        type: TASK_GET_ALL_SUCCESS,
        payload: taskList
    }
};

export const taskGetAllFailure = (error) => {
    return {
        type: TASK_GET_ALL_FAILURE,
        payload: error
    }
};

export const taskAdd = (task) => {
    return {
        type: TASK_ADD,
        payload: task
    };
};

export const taskAddSuccess = (task) => {
    return {
        type: TASK_ADD_SUCCESS,
        payload: task
    }
};

export const taskAddFailure = (error) => {
    return {
        type: TASK_ADD_FAILURE,
        payload: error
    }
};

export const taskUpdate = (task) => {
    return {
        type: TASK_UPDATE,
        payload: task
    };
};

export const taskUpdateSuccess = (task) => {
    return {
        type: TASK_UPDATE_SUCCESS,
        payload: task
    }
};

export const taskUpdateFailure = (error) => {
    return {
        type: TASK_UPDATE_FAILURE,
        payload: error
    }
};

export const taskDelete = (task) => {
    return {
        type: TASK_DELETE,
        payload: task
    };
};

export const taskDeleteSuccess = (task) => {
    return {
        type: TASK_DELETE_SUCCESS,
        payload: task
    }
};

export const taskDeleteFailure = (error) => {
    return {
        type: TASK_DELETE_FAILURE,
        payload: error
    }
};
