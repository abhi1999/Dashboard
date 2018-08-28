import { 
    TOAST_ERROR,
    GET_LAST_MODIFIED,
    TASK_STATUS_LIST_GET_ALL,
    TASK_STATUS_LIST_GET_ALL_SUCCESS,
    TASK_STATUS_LIST_GET_ALL_FAILURE,
    SERVICE_GET_STATE, 
    SERVICE_GET_STATE_SUCCESS, 
    SERVICE_GET_STATE_FAILURE, 
    SERVICE_COMMAND, 
    SERVICE_COMMAND_SUCCESS, 
    SERVICE_COMMAND_FAILURE,
    TASK_COMMAND,
    TASK_COMMAND_SUCCESS,
    TASK_COMMAND_FAILURE

} from './../constants/ActionTypes';

export function toastError(message) {
    return {
        type: TOAST_ERROR,
        payload: message
    };
  }

export function getLastModified(lastModified) {
    return {
        type: GET_LAST_MODIFIED,
        payload: lastModified
    };
  }

export const taskStatusListGetAllDispatch = () => (dispatch, getState)=> {
    dispatch(taskStatusListGetAll());
};


export const taskStatusListGetAll = () => {
    return {
        type: TASK_STATUS_LIST_GET_ALL
    };
};

export const taskStatusListGetAllSuccess = (taskStatusList) => {
    return {
        type: TASK_STATUS_LIST_GET_ALL_SUCCESS,
        payload: taskStatusList
    }
};

export const taskStatusListGetAllFailure = (error) => {
    return {
        type: TASK_STATUS_LIST_GET_ALL_FAILURE,
        payload: error
    }
};

export const serviceGetState = () => {
    return {
        type: SERVICE_GET_STATE
    };
};

export const serviceGetStateSuccess = (newServiceState) => {
    return {
        type: SERVICE_GET_STATE_SUCCESS,
        payload: newServiceState
    }
};

export const serviceGetStateFailure = (error) => {
    return {
        type: SERVICE_GET_STATE_FAILURE,
        payload: error
    }
};

export const serviceCommand = (command) => {
    return {
        type: SERVICE_COMMAND,
        payload: command
    };
};

export const serviceCommandSuccess = (command) => {
    return {
        type: SERVICE_COMMAND_SUCCESS,
        payload: command
    }
};

export const serviceCommandFailure = (error) => {
    return {
        type: SERVICE_COMMAND_FAILURE,
        payload: error
    }
};

export const taskCommand = (Id, command) => {
    return {
        type: TASK_COMMAND,
        Id,
        payload: command
    };
};

export const taskCommandSuccess = (taskState) => {
    return {
        type: TASK_COMMAND_SUCCESS,
        payload: taskState
    }
};

export const taskCommandFailure = (error) => {
    return {
        type: TASK_COMMAND_FAILURE,
        payload: error
    }
};
