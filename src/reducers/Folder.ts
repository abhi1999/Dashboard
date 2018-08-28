import _ from "lodash";

import { 
    FOLDER_GET_ALL, 
    FOLDER_GET_ALL_SUCCESS, 
    FOLDER_GET_ALL_FAILURE, 
    FOLDER_ADD, 
    FOLDER_ADD_SUCCESS, 
    FOLDER_ADD_FAILURE, 
    FOLDER_UPDATE, 
    FOLDER_UPDATE_SUCCESS, 
    FOLDER_UPDATE_FAILURE,
    FOLDER_DELETE, 
    FOLDER_DELETE_SUCCESS, 
    FOLDER_DELETE_FAILURE 
} from './../constants/ActionTypes';
import Folder from "./../constants/scheduler/folder";

const initialSettings = {
  folderList : []
};

const config = (state = initialSettings, action) => {
    switch (action.type) {
        case FOLDER_GET_ALL:
            return {
              ...state,
              folderList : [] // Clear out the list in memory, as we are going to get a new one
            };
        case FOLDER_GET_ALL_SUCCESS:
            return {
                ...state,
                folderList: action.payload.data
            };
        case FOLDER_GET_ALL_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case FOLDER_ADD:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case FOLDER_ADD_SUCCESS:
            return {
                ...state,
                folderList: _.orderBy(state.folderList.concat(action.payload),"Name")
                // Add the new item to the folderList
            };
        case FOLDER_ADD_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case FOLDER_UPDATE:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case FOLDER_UPDATE_SUCCESS:
            return {
                ...state,
                folderList: _.orderBy(state.folderList.map((folder:Folder) => folder.Id === action.payload.Id ? action.payload : folder),"Name")
                // Update the folderList with the one that has changed
            };
        case FOLDER_UPDATE_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case FOLDER_DELETE:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case FOLDER_DELETE_SUCCESS:
            return {
                ...state,
                folderList: state.folderList.filter((folder:Folder) => folder.Id !== action.payload.Id)
                // Update the folderList to remove the one that was deleted
            };
        case FOLDER_DELETE_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default config;
