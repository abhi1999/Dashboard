import _ from 'lodash';
import uuid from 'uuid-v4';

import { 
    FREIGHT_CODE_GET_ALL, 
    FREIGHT_CODE_GET_ALL_SUCCESS, 
    FREIGHT_CODE_GET_ALL_FAILURE, 
    FREIGHT_CODE_ADD, 
    FREIGHT_CODE_ADD_SUCCESS, 
    FREIGHT_CODE_ADD_FAILURE, 
    FREIGHT_CODE_UPDATE, 
    FREIGHT_CODE_UPDATE_SUCCESS, 
    FREIGHT_CODE_UPDATE_FAILURE,
    FREIGHT_CODE_DELETE, 
    FREIGHT_CODE_DELETE_SUCCESS, 
    FREIGHT_CODE_DELETE_FAILURE 
} from './../constants/ActionTypes';

import FreightCode from "../constants/implementations/FreightCode";

const initialSettings = {
  freightCodeList : []
};

const config = (state = initialSettings, action) => {
    switch (action.type) {
        case FREIGHT_CODE_GET_ALL:
            return {
              ...state,
              freightCodeList : [] // Clear out the list in memory, as we are going to get a new one
            };
        case FREIGHT_CODE_GET_ALL_SUCCESS:
            return {
                ...state,
                freightCodeList: action.payload.data.value.map(item => ({ ...item, Id : uuid() })), // Give these a unique Id
                freightCodeListCount: action.payload.data['@odata.count']
            };
        case FREIGHT_CODE_GET_ALL_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case FREIGHT_CODE_ADD:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case FREIGHT_CODE_ADD_SUCCESS:
            return {
                ...state,
                freightCodeList: state.freightCodeList.concat({ ...action.payload, Id : uuid() }) // Add an id for react
            };
        case FREIGHT_CODE_ADD_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case FREIGHT_CODE_UPDATE:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case FREIGHT_CODE_UPDATE_SUCCESS:
            return {
                ...state,
                freightCodeList: state.freightCodeList.map(
                    (freightCode:FreightCode) =>
                        freightCode.Id === action.payload.Id ? action.payload : freightCode
                ) // Update the freightCodeList with the one that has changed
            };
        case FREIGHT_CODE_UPDATE_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case FREIGHT_CODE_DELETE:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case FREIGHT_CODE_DELETE_SUCCESS:
            return {
                ...state,
                freightCodeList: state.freightCodeList.filter(
                    (freightCode:FreightCode) => freightCode.Id !== action.payload.Id)
                // Update the freightCodeList to remove the one that was deleted
            };
        case FREIGHT_CODE_DELETE_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default config;
