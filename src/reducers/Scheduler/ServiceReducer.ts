import uuid from 'uuid-v4';

import { 
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
} from '../../constants/ActionTypes';
import { SERVICE_STATE_RUNNING } from '../../constants/ServiceParameters';
import ServiceState from '../../constants/scheduler/serviceState';
import WorkflowTask from '../../constants/scheduler/workflowTask';

const initialSettings = {
  serviceState : new ServiceState ({
    ControlCommand: "none",
    CurrentState: "stopped",
    AdminTaskRunCount: 0
    }),
  taskStatusList: [],
  clientId: uuid(),
  lastModified: uuid()
};

const service = (state = initialSettings, action) => {
    switch (action.type) {
        case GET_LAST_MODIFIED:
            return {
                ...state,
                lastModified: action.payload
            };
        case TASK_STATUS_LIST_GET_ALL:
            return {
              ...state
            };
        case TASK_STATUS_LIST_GET_ALL_SUCCESS:
            let taskStatusListArray = action.payload.data;
            // drop the first item, which is the AdminTaskCount
            if (taskStatusListArray!==undefined && taskStatusListArray.length>0)
            {
                taskStatusListArray = taskStatusListArray.slice(1, taskStatusListArray.length-1);
            }

            return {
                ...state,
                taskStatusList: taskStatusListArray
            };
        case TASK_STATUS_LIST_GET_ALL_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case SERVICE_GET_STATE:
            return {
              ...state,
              serviceState : {}
            };
        case SERVICE_GET_STATE_SUCCESS:        
            return {
                ...state,
                serviceState: action.payload.data,
                lastModified: action.payload.data.LastModifiedServer
            };
        case SERVICE_GET_STATE_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case SERVICE_COMMAND:
            return {
                ...state,
              taskStatusList: []
            };
        case SERVICE_COMMAND_SUCCESS:
            return {
                ...state,
                serviceState: action.payload.data
            };
        case SERVICE_COMMAND_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case TASK_COMMAND:
            return {
                ...state
            };
        case TASK_COMMAND_SUCCESS:

            const taskUpdated = action.payload.data;
            const taskUpdatedId = taskUpdated.Id;
            const indexOf = state.taskStatusList.findIndex((item:WorkflowTask) => item.Id === taskUpdatedId)
            
            return {
                ...state,
                taskStatusList: [...state.taskStatusList.slice(0, indexOf), taskUpdated, ...state.taskStatusList.slice(indexOf+1)]
            };
        case TASK_COMMAND_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default service;
