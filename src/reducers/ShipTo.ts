import _ from 'lodash';
import uuid from "uuid-v4";

import { 
    SHIPTO_GET_ALL, 
    SHIPTO_GET_ALL_SUCCESS, 
    SHIPTO_GET_ALL_FAILURE, 
    SHIPTO_ADD,
    SHIPTO_ADD_SUCCESS,
    SHIPTO_ADD_FAILURE,
    SHIPTO_UPDATE, 
    SHIPTO_UPDATE_SUCCESS, 
    SHIPTO_UPDATE_FAILURE,
    SHIPTO_DELETE, 
    SHIPTO_DELETE_SUCCESS, 
    SHIPTO_DELETE_FAILURE 
} from './../constants/ActionTypes';

import { IShipTo } from "../constants/edidb";

const initialSettings = {
  shipToList : []
};

const config = (state = initialSettings, action) => {
    switch (action.type) {
        case SHIPTO_GET_ALL:
            return {
              ...state,
              shipToList : [] // Clear out the list in memory, as we are going to get a new one
            };
        case SHIPTO_GET_ALL_SUCCESS:
            console.log("AXIOS DATA COUNT: " + JSON.stringify(action.payload.data.value.length, null, 2));
            return {
                ...state,
                // shipToList: action.payload.data.value.map(item => ({ ...item })), // Give these a unique Id
                shipToList: action.payload.data.value,
                shipToListCount: action.payload.data['@odata.count']
            };
        case SHIPTO_GET_ALL_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case SHIPTO_ADD:
            return {
              ...state // This is just dispatching the action, so nothing to change
            };
        case SHIPTO_ADD_SUCCESS:
            return {
              ...state,
              shipToList: state.shipToList.concat({ ...action.payload, Id: uuid() })
            };
        case SHIPTO_ADD_FAILURE:
            return {
              ...state,
              errorMessage: action.payload
            };
        case SHIPTO_UPDATE:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case SHIPTO_UPDATE_SUCCESS:
            return {
                ...state,
                shipToList: state.shipToList.map(
                    (shipTo:IShipTo) =>
                        shipTo.ShipTo_ID === action.payload.ShipTo_ID ? action.payload : shipTo
                ) // Update the list with the one that has changed
            };
        case SHIPTO_UPDATE_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case SHIPTO_DELETE:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case SHIPTO_DELETE_SUCCESS:
            return {
                ...state,
                shipToList: state.shipToList.filter(
                    (shipTo:IShipTo) => shipTo.ShipTo_ID !== action.payload.ShipTo_ID)
                // Update the list to remove the one that was deleted
            };
        case SHIPTO_DELETE_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default config;
