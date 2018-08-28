import _ from "lodash";

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
import Task from "./../constants/scheduler/task";

const initialSettings = {
  taskList : []
};

const config = (state = initialSettings, action) => {
    switch (action.type) {
        case TASK_GET_ALL:
            return {
              ...state,
              taskList : [] // Clear out the list in memory, as we are going to get a new one
            };
        case TASK_GET_ALL_SUCCESS:
            return {
                ...state,
                taskList: action.payload.data
            };
        case TASK_GET_ALL_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case TASK_ADD:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case TASK_ADD_SUCCESS:
            return {
                ...state,
                taskList: _.orderBy(state.taskList.concat(action.payload),"Name")
                // Add the new item to the taskList
            };
        case TASK_ADD_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case TASK_UPDATE:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case TASK_UPDATE_SUCCESS:
            return {
                ...state,
                taskList: _.orderBy(state.taskList.map((task:Task) => task.Id === action.payload.Id ? action.payload : task))
                // Update the taskList with the one that has changed
            };
        case TASK_UPDATE_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case TASK_DELETE:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case TASK_DELETE_SUCCESS:
            return {
                ...state,
                taskList: state.taskList.filter((task:Task) => task.Id !== action.payload.Id)
                // Update the taskList to remove the one that was deleted
            };
        case TASK_DELETE_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default config;
