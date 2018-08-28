import { 
    SCHEDULER_GET_ALL, 
    SCHEDULER_GET_ALL_SUCCESS, 
    SCHEDULER_GET_ALL_FAILURE, 
    SCHEDULER_ADD, 
    SCHEDULER_ADD_SUCCESS, 
    SCHEDULER_ADD_FAILURE, 
    SCHEDULER_UPDATE, 
    SCHEDULER_UPDATE_SUCCESS, 
    SCHEDULER_UPDATE_FAILURE,
    SCHEDULER_DELETE, 
    SCHEDULER_DELETE_SUCCESS, 
    SCHEDULER_DELETE_FAILURE 
} from './../constants/ActionTypes';

export const schedulerGetAll = () => {
    return {
        type: SCHEDULER_GET_ALL
    };
};

export const schedulerGetAllSuccess = (schedulerList) => {
    return {
        type: SCHEDULER_GET_ALL_SUCCESS,
        payload: schedulerList
    }
};

export const schedulerGetAllFailure = (error) => {
    return {
        type: SCHEDULER_GET_ALL_FAILURE,
        payload: error
    }
};

export const schedulerAdd = (scheduler) => {
    return {
        type: SCHEDULER_ADD,
        payload: scheduler
    };
};

export const schedulerAddSuccess = (scheduler) => {
    return {
        type: SCHEDULER_ADD_SUCCESS,
        payload: scheduler
    }
};

export const schedulerAddFailure = (error) => {
    return {
        type: SCHEDULER_ADD_FAILURE,
        payload: error
    }
};

export const schedulerUpdate = (scheduler) => {
    return {
        type: SCHEDULER_UPDATE,
        payload: scheduler
    };
};

export const schedulerUpdateSuccess = (scheduler) => {
    return {
        type: SCHEDULER_UPDATE_SUCCESS,
        payload: scheduler
    }
};

export const schedulerUpdateFailure = (error) => {
    return {
        type: SCHEDULER_UPDATE_FAILURE,
        payload: error
    }
};

export const schedulerDelete = (scheduler) => {
    return {
        type: SCHEDULER_DELETE,
        payload: scheduler
    };
};

export const schedulerDeleteSuccess = (scheduler) => {
    return {
        type: SCHEDULER_DELETE_SUCCESS,
        payload: scheduler
    }
};

export const schedulerDeleteFailure = (error) => {
    return {
        type: SCHEDULER_DELETE_FAILURE,
        payload: error
    }
};
