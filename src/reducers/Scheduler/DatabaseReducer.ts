import _ from "lodash";

import { 
    DATABASE_GET_ALL, 
    DATABASE_GET_ALL_SUCCESS, 
    DATABASE_GET_ALL_FAILURE, 
    DATABASE_ADD, 
    DATABASE_ADD_SUCCESS, 
    DATABASE_ADD_FAILURE, 
    DATABASE_UPDATE, 
    DATABASE_UPDATE_SUCCESS, 
    DATABASE_UPDATE_FAILURE,
    DATABASE_DELETE, 
    DATABASE_DELETE_SUCCESS, 
    DATABASE_DELETE_FAILURE 
} from '../../constants/ActionTypes';
import Database from "../../constants/scheduler/database";

const initialSettings = {
  databaseList : []
};

const config = (state = initialSettings, action) => {
    switch (action.type) {
        case DATABASE_GET_ALL:
            return {
              ...state,
              databaseList : [] // Clear out the list in memory, as we are going to get a new one
            };
        case DATABASE_GET_ALL_SUCCESS:
            return {
                ...state,
                databaseList: action.payload.data
            };
        case DATABASE_GET_ALL_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case DATABASE_ADD:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case DATABASE_ADD_SUCCESS:
            console.error(JSON.stringify(action.payload));
            console.error(JSON.stringify(state.databaseList.concat(action.payload)));
            return {
                ...state,
                databaseList: _.orderBy(state.databaseList.concat(action.payload), "Name") // Add the new item to the databaseList in sorted order
            };
        case DATABASE_ADD_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case DATABASE_UPDATE:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case DATABASE_UPDATE_SUCCESS:
            return {
                ...state,
                databaseList: _.orderBy(state.databaseList.map((database:Database) => database.Id === action.payload.Id ? action.payload : database), "Name") 
                // Update the databaseList with the one that has changed
            };
        case DATABASE_UPDATE_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case DATABASE_DELETE:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case DATABASE_DELETE_SUCCESS:
            return {
                ...state,
                databaseList: state.databaseList.filter((database:Database) => database.Id !== action.payload.Id)
                // Update the databaseList to remove the one that was deleted
            };
        case DATABASE_DELETE_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default config;
