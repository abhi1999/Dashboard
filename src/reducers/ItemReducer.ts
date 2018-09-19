import _ from "lodash";

import {
  ITEM_GET_ALL,
  ITEM_GET_ALL_SUCCESS,
  ITEM_GET_ALL_FAILURE,
  ITEM_ADD,
  ITEM_ADD_SUCCESS,
  ITEM_ADD_FAILURE,
  ITEM_UPDATE,
  ITEM_UPDATE_SUCCESS,
  ITEM_UPDATE_FAILURE,
  ITEM_DELETE,
  ITEM_DELETE_SUCCESS,
  ITEM_DELETE_FAILURE
} from "../constants/ActionTypes";
import { IItem } from "../constants/edidb";

interface IState {
  itemList : IItem[];
  itemListCount : number,
  loading : boolean
}

const initialSettings : IState = {
  itemList : [],
  itemListCount : 0,
  loading : true
};

const config = (state = initialSettings, action) => {
  switch (action.type) {
    case ITEM_GET_ALL:
      return {
        ...state,
        loading : true,
        itemList: [] // Clear out the list in memory, as we are going to get a new one
      };

    case ITEM_GET_ALL_SUCCESS:
      return {
        ...state,
        itemList: action.payload.data.value,
        itemListCount: action.payload.data["@odata.count"],
        loading : false
      };

    case ITEM_GET_ALL_FAILURE:
      return {
        ...state,
        loading : false,
        errorMessage: action.payload
      };

    case ITEM_ADD:
      return {
        ...state // This is just dispatching the action, so nothing to change
      };

    case ITEM_ADD_SUCCESS:
      return {
        ...state,
        itemList: action.payload
      };

    case ITEM_ADD_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };

    case ITEM_UPDATE:
      return {
        ...state // This is just dispatching the action, so nothing to change
      };

    case ITEM_UPDATE_SUCCESS:
      return {
        ...state,
        itemList: state.itemList.map(
          (item:IItem) =>
            item.Int_Item_No === action.payload.Id ? action.payload : item
        ) // Update the itemList with the one that has changed
      };

    case ITEM_UPDATE_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };

    case ITEM_DELETE:
      return {
        ...state // This is just dispatching the action, so nothing to change
      };

    case ITEM_DELETE_SUCCESS:
      return {
        ...state,
        itemList: state.itemList.filter(
          (item:IItem) => item.Int_Item_No !== action.payload.Id
        )
        // Update the itemList to remove the one that was deleted
      };

    case ITEM_DELETE_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
      
    default:
      return state;
  }
};

export default config;
