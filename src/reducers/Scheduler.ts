import _ from "lodash";

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
import Scheduler from "./../constants/scheduler/scheduler";

const initialSettings = {
  schedulerList : []
};

const config = (state = initialSettings, action) => {
    switch (action.type) {
        case SCHEDULER_GET_ALL:
            return {
              ...state,
              schedulerList : [] // Clear out the list in memory, as we are going to get a new one
            };
        case SCHEDULER_GET_ALL_SUCCESS:
            return {
                ...state,
                schedulerList: action.payload.data
            };
        case SCHEDULER_GET_ALL_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case SCHEDULER_ADD:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case SCHEDULER_ADD_SUCCESS:
            return {
                ...state,
                schedulerList: _.orderBy(state.schedulerList.concat(action.payload),"Name")
                // Add the new item to the schedulerList
            };
        case SCHEDULER_ADD_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case SCHEDULER_UPDATE:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case SCHEDULER_UPDATE_SUCCESS:
            return {
                ...state,
                schedulerList: state.schedulerList.map((scheduler:Scheduler) => scheduler.Id === action.payload.Id ? action.payload : scheduler)
                // Update the schedulerList with the one that has changed
            };
        case SCHEDULER_UPDATE_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case SCHEDULER_DELETE:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case SCHEDULER_DELETE_SUCCESS:
            return {
                ...state,
                schedulerList: state.schedulerList.filter((scheduler:Scheduler) => scheduler.Id !== action.payload.Id)
                // Update the schedulerList to remove the one that was deleted
            };
        case SCHEDULER_DELETE_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default config;
