import _ from "lodash";
import uuid from "uuid-v4";

import {
  ERRORCODE_GET_ALL,
  ERRORCODE_GET_ALL_SUCCESS,
  ERRORCODE_GET_ALL_FAILURE,
  ERRORCODE_ADD,
  ERRORCODE_ADD_SUCCESS,
  ERRORCODE_ADD_FAILURE,
  ERRORCODE_UPDATE,
  ERRORCODE_UPDATE_SUCCESS,
  ERRORCODE_UPDATE_FAILURE,
  ERRORCODE_DELETE,
  ERRORCODE_DELETE_SUCCESS,
  ERRORCODE_DELETE_FAILURE
} from "./../constants/ActionTypes";
import ErrorCode from "../constants/implementations/ErrorCode";

const initialSettings = {
  errorCodeList: []
};

const config = (state = initialSettings, action) => {
  switch (action.type) {
    case ERRORCODE_GET_ALL:
      return {
        ...state,
        errorCodeList: [] // Clear out the list in memory, as we are going to get a new one
      };
    case ERRORCODE_GET_ALL_SUCCESS:
      return {
        ...state,
        errorCodeList: action.payload.data.value.map(item => ({
          ...item,
          Id: uuid(),
        })), // Give these a unique Id
        errorCodeListCount: action.payload.data["@odata.count"]
      };
    case ERRORCODE_GET_ALL_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    case ERRORCODE_ADD:
      return {
        ...state // This is just dispatching the action, so nothing to change
      };
    case ERRORCODE_ADD_SUCCESS:
      return {
        ...state,
        errorCodeList: state.errorCodeList.concat({ ...action.payload, Id: uuid() })
      };
    case ERRORCODE_ADD_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    case ERRORCODE_UPDATE:
      return {
        ...state // This is just dispatching the action, so nothing to change
      };
    case ERRORCODE_UPDATE_SUCCESS:
      return {
        ...state,
        errorCodeList: state.errorCodeList.map(
          (errorCode: ErrorCode) =>
            errorCode.Id === action.payload.Id ? action.payload : errorCode
        ) // Update the errorCodeList with the one that has changed
      };
    case ERRORCODE_UPDATE_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    case ERRORCODE_DELETE:
      return {
        ...state // This is just dispatching the action, so nothing to change
      };
    case ERRORCODE_DELETE_SUCCESS:
      return {
        ...state,
        errorCodeList: state.errorCodeList.filter(
          (errorCode: ErrorCode) => errorCode.Id !== action.payload.Id
        )
        // Update the errorCodeList to remove the one that was deleted
      };
    case ERRORCODE_DELETE_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default config;
