import _ from "lodash";
import uuid from "uuid-v4";

import {
  CARRIER_GET_ALL,
  CARRIER_GET_ALL_SUCCESS,
  CARRIER_GET_ALL_FAILURE,
  CARRIER_ADD,
  CARRIER_ADD_SUCCESS,
  CARRIER_ADD_FAILURE,
  CARRIER_UPDATE,
  CARRIER_UPDATE_SUCCESS,
  CARRIER_UPDATE_FAILURE,
  CARRIER_DELETE,
  CARRIER_DELETE_SUCCESS,
  CARRIER_DELETE_FAILURE
} from "../constants/ActionTypes";
import ShipVia from "../constants/implementations/ShipViaModel";

const initialSettings = {
  carrierList: []
};

const config = (state = initialSettings, action) => {
  switch (action.type) {
    case CARRIER_GET_ALL:
      return {
        ...state,
        carrierList: [] // Clear out the list in memory, as we are going to get a new one
      };
    case CARRIER_GET_ALL_SUCCESS:
      return {
        ...state,
        carrierList: action.payload.data.value.map(item => ({
          ...item,
          Id: uuid(),
          Test: false
        })), // Give these a unique Id
        carrierListCount: action.payload.data["@odata.count"]
      };
    case CARRIER_GET_ALL_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    case CARRIER_ADD:
      return {
        ...state // This is just dispatching the action, so nothing to change
      };
    case CARRIER_ADD_SUCCESS:
      return {
        ...state,
        carrierList: state.carrierList.concat({ ...action.payload, Id: uuid(), Test: false }) // Add an id for react
      };
    case CARRIER_ADD_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    case CARRIER_UPDATE:
      return {
        ...state // This is just dispatching the action, so nothing to change
      };
    case CARRIER_UPDATE_SUCCESS:
      return {
        ...state,
        carrierList: state.carrierList.map(
          (carrier:ShipVia) =>
            carrier.Id === action.payload.Id ? action.payload : carrier
        ) // Update the carrierList with the one that has changed
      };
    case CARRIER_UPDATE_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    case CARRIER_DELETE:
      return {
        ...state // This is just dispatching the action, so nothing to change
      };
    case CARRIER_DELETE_SUCCESS:
      return {
        ...state,
        carrierList: state.carrierList.filter(
          (carrier:ShipVia) => carrier.Id !== action.payload.Id
        )
        // Update the carrierList to remove the one that was deleted
      };
    case CARRIER_DELETE_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default config;
