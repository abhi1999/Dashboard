import _ from "lodash";

import { 
    NETWORK_GET_ALL, 
    NETWORK_GET_ALL_SUCCESS, 
    NETWORK_GET_ALL_FAILURE, 
    NETWORK_ADD, 
    NETWORK_ADD_SUCCESS, 
    NETWORK_ADD_FAILURE, 
    NETWORK_UPDATE, 
    NETWORK_UPDATE_SUCCESS, 
    NETWORK_UPDATE_FAILURE,
    NETWORK_DELETE, 
    NETWORK_DELETE_SUCCESS, 
    NETWORK_DELETE_FAILURE 
} from '../../constants/ActionTypes';
import Network from "../../constants/scheduler/network";

const initialSettings = {
  networkList : []
};

const config = (state = initialSettings, action) => {
    switch (action.type) {
        case NETWORK_GET_ALL:
            return {
              ...state,
              networkList : [] // Clear out the list in memory, as we are going to get a new one
            };
        case NETWORK_GET_ALL_SUCCESS:
            return {
                ...state,
                networkList: action.payload.data
            };
        case NETWORK_GET_ALL_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case NETWORK_ADD:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case NETWORK_ADD_SUCCESS:
            return {
                ...state,
                networkList: _.orderBy(state.networkList.concat(action.payload),"Name")
                // Add the new item to the networkList
            };
        case NETWORK_ADD_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case NETWORK_UPDATE:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case NETWORK_UPDATE_SUCCESS:
            return {
                ...state,
                networkList: _.orderBy(state.networkList.map((network:Network) => network.Id === action.payload.Id ? action.payload : network),"Name")
                // Update the networkList with the one that has changed
            };
        case NETWORK_UPDATE_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case NETWORK_DELETE:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case NETWORK_DELETE_SUCCESS:
            return {
                ...state,
                networkList: state.networkList.filter((network:Network) => network.Id !== action.payload.Id)
                // Update the networkList to remove the one that was deleted
            };
        case NETWORK_DELETE_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default config;
