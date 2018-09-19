import _ from "lodash";
import uuid from "uuid-v4";

import {
 VPNETWORK_GET_ALL,
 VPNETWORK_GET_ALL_SUCCESS,
 VPNETWORK_GET_ALL_FAILURE,
 VPNETWORK_ADD,
 VPNETWORK_ADD_SUCCESS,
 VPNETWORK_ADD_FAILURE,
 VPNETWORK_UPDATE,
 VPNETWORK_UPDATE_SUCCESS,
 VPNETWORK_UPDATE_FAILURE,
 VPNETWORK_DELETE,
 VPNETWORK_DELETE_SUCCESS,
 VPNETWORK_DELETE_FAILURE
} from "./../constants/ActionTypes";
import { INetwork } from "../constants/edidb";

export interface IvpNetworkState {
  networkList : INetwork[],
  networkListCount : number,
  networkConfigList : string[],
  loading : boolean,
  errorMessage : any
}

const initialSettings : IvpNetworkState = {
  networkList: [],
  networkListCount : 0,
  networkConfigList: [],
  loading : true,
  errorMessage : null
};

const vpnetworksReducer = (state = initialSettings, action) => {
  switch (action.type) {
    case VPNETWORK_GET_ALL:
      return {
        ...state,
        networkList: [], // Clear out the list in memory, as we are going to get a new one
        networkConfigList: [],
        loading : true
      };

    case VPNETWORK_GET_ALL_SUCCESS:     
      return {
        ...state,
        networkList: action.payload.networkPayload.data.value,
        networkListCount: action.payload.networkPayload.data["@odata.count"],
        networkConfigList : action.payload.configList.data,
        loading : false
      };

    case VPNETWORK_GET_ALL_FAILURE:
      return {
        ...state,
        loading : false,
        errorMessage: action.payload
      };

    case VPNETWORK_ADD:
      return {
        ...state // This is just dispatching the action, so nothing to change
      };

    case VPNETWORK_ADD_SUCCESS:
      return {
        ...state,
        networkList: state.networkList.concat({ ...action.payload, Id: uuid() }) // Add an id for react
      };

    case VPNETWORK_ADD_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };

    case VPNETWORK_UPDATE:
      return {
        ...state // This is just dispatching the action, so nothing to change
      };
      
    case VPNETWORK_UPDATE_SUCCESS:
      return {
        ...state,
        networkList: state.networkList.map(
          (network:INetwork) =>
            network.Van_ID === action.payload.Van_ID ? action.payload : network
        ) // Update the networkList with the one that has changed
      };

    case VPNETWORK_UPDATE_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };

    case VPNETWORK_DELETE:
      return {
        ...state // This is just dispatching the action, so nothing to change
      };

    case VPNETWORK_DELETE_SUCCESS:
      return {
        ...state,
        networkList: state.networkList.filter(
          (network:INetwork ) => network.Van_ID !== action.payload.Van_ID
        )
        // Update the networkList to remove the one that was deleted
      };

    case VPNETWORK_DELETE_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};

export default vpnetworksReducer;
