import _ from "lodash";

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
import Variable from "../../constants/scheduler/variable";

const initialSettings = {
  variableList : []
};

const config = (state = initialSettings, action) => {
    switch (action.type) {
        case VARIABLE_GET_ALL:
            return {
              ...state,
              variableList : [] // Clear out the list in memory, as we are going to get a new one
            };
        case VARIABLE_GET_ALL_SUCCESS:
            return {
                ...state,
                variableList: action.payload.data
            };
        case VARIABLE_GET_ALL_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case VARIABLE_ADD:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case VARIABLE_ADD_SUCCESS:
            return {
                ...state,
                variableList: _.orderBy(state.variableList.concat(action.payload),"Name")
                // Add the new item to the variableList
            };
        case VARIABLE_ADD_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case VARIABLE_UPDATE:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case VARIABLE_UPDATE_SUCCESS:
            return {
                ...state,
                variableList: _.orderBy(state.variableList.map((variable:Variable) => variable.Id === action.payload.Id ? action.payload : variable))
                // Update the variableList with the one that has changed
            };
        case VARIABLE_UPDATE_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case VARIABLE_DELETE:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case VARIABLE_DELETE_SUCCESS:
            return {
                ...state,
                variableList: state.variableList.filter((variable:Variable) => variable.Id !== action.payload.Id)
                // Update the variableList to remove the one that was deleted
            };
        case VARIABLE_DELETE_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default config;
