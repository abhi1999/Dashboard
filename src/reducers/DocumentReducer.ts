import _ from "lodash";

import {
  DOCUMENT_GET_ALL,
  DOCUMENT_GET_ALL_SUCCESS,
  DOCUMENT_GET_ALL_FAILURE,
  DOCUMENT_ADD,
  DOCUMENT_ADD_SUCCESS,
  DOCUMENT_ADD_FAILURE,
  DOCUMENT_UPDATE,
  DOCUMENT_UPDATE_SUCCESS,
  DOCUMENT_UPDATE_FAILURE,
  DOCUMENT_DELETE,
  DOCUMENT_DELETE_SUCCESS,
  DOCUMENT_DELETE_FAILURE
} from "../constants/ActionTypes";
import { IXMLDoc } from "../constants/edidb";

const initialSettings = {
  documentList: []
};

const config = (state = initialSettings, action) => {
  switch (action.type) {
    case DOCUMENT_GET_ALL:
      return {
        ...state,
        documentList: [] // Clear out the list in memory, as we are going to get a new one
      };
    case DOCUMENT_GET_ALL_SUCCESS:
      return {
        ...state,
        documentList: action.payload.data.value,
        documentListCount: action.payload.data["@odata.count"]
      };
    case DOCUMENT_GET_ALL_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    case DOCUMENT_ADD:
      return {
        ...state // This is just dispatching the action, so nothing to change
      };
    case DOCUMENT_ADD_SUCCESS:
      return {
        ...state,
        documentList: state.documentList.concat({ ...action.payload })
      };
    case DOCUMENT_ADD_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    case DOCUMENT_UPDATE:
      return {
        ...state // This is just dispatching the action, so nothing to change
      };
    case DOCUMENT_UPDATE_SUCCESS:
      return {
        ...state,
        documentList: state.documentList.map(
          (document: IXMLDoc) =>
            document.VPID === action.payload.VPID ? action.payload : document
        ) // Update the documentList with the one that has changed
      };
    case DOCUMENT_UPDATE_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    case DOCUMENT_DELETE:
      return {
        ...state // This is just dispatching the action, so nothing to change
      };
    case DOCUMENT_DELETE_SUCCESS:
      return {
        ...state,
        documentList: state.documentList.filter(
          (document: IXMLDoc) => document.VPID !== action.payload.VPID
        )
        // Update the documentList to remove the one that was deleted
      };
    case DOCUMENT_DELETE_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default config;
