import _ from "lodash";

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
import Workflow from "./../constants/scheduler/workflow";

const initialSettings = {
  workflowList : []
};

const config = (state = initialSettings, action) => {
    switch (action.type) {
        case WORKFLOW_GET_ALL:
            return {
              ...state,
              workflowList : [] // Clear out the list in memory, as we are going to get a new one
            };
        case WORKFLOW_GET_ALL_SUCCESS:
            return {
                ...state,
                workflowList: action.payload.data
            };
        case WORKFLOW_GET_ALL_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case WORKFLOW_ADD:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case WORKFLOW_ADD_SUCCESS:
            return {
                ...state,
                workflowList: _.orderBy(state.workflowList.concat(action.payload),"Name")
                // Add the new item to the workflowList
            };
        case WORKFLOW_ADD_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case WORKFLOW_UPDATE:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case WORKFLOW_UPDATE_SUCCESS:
            return {
                ...state,
                workflowList: _.orderBy(state.workflowList.map((workflow:Workflow) => workflow.Id === action.payload.Id ? action.payload : workflow))
                // Update the workflowList with the one that has changed
            };
        case WORKFLOW_UPDATE_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case WORKFLOW_DELETE:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case WORKFLOW_DELETE_SUCCESS:
            return {
                ...state,
                workflowList: state.workflowList.filter((workflow:Workflow) => workflow.Id !== action.payload.Id)
                // Update the workflowList to remove the one that was deleted
            };
        case WORKFLOW_DELETE_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default config;
