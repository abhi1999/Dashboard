import _ from "lodash";
import { parseString, Builder } from 'xml2js';
import { IUserLabel } from '../constants/IUserLabel';
import { IUpdateItemAction } from '../actions/ItemAction';

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
  ITEM_DELETE_FAILURE,
  ITEM_GETSAC_ALL,
  ITEM_GETSAC_FAILURE,
  ITEM_GETSAC_SUCCESS,
  ITEM_GETXREF_ALL,
  ITEM_GETXREF_FAILURE,
  ITEM_GETXREF_SUCCESS,
  AIU01GET_ALL,
  AIU01GET_FAILURE,
  AIU01GET_SUCCESS,
  ITEM_FRT_GET_ALL,
  ITEM_FRT_GET_SUCCESS,
  ITEM_FRT_GET_FAILURE
} from "../constants/ActionTypes";
import { IItem, IAPIitemXRef, IAPIsacXRef, IFreightCode } from "../constants/edidb";

export interface IItemReducer {
  itemList : IItem[];
  itemListCount : number,
  loading : number,
  freightCodeList : IFreightCode[],
  xrefList : IAPIitemXRef[],
  sacList : IAPIsacXRef[]
  userLabelsList : IUserLabel[]
}

const initialSettings : IItemReducer = {
  itemList : [],
  itemListCount : 0,
  loading : 0,
  freightCodeList : [],
  xrefList : [],
  sacList : [],
  userLabelsList : []
};

const config = (state = initialSettings, action) => {
  switch (action.type) {
    case ITEM_GET_ALL:
      return {
        ...state,
        loading : state.loading + 1,
        itemList: [] 
      };

    case ITEM_GET_ALL_SUCCESS:
      return {
        ...state,
        itemList: action.payload.data.value,
        itemListCount: action.payload.data["@odata.count"],
        loading : state.loading > 0 ? state.loading - 1 : 0
      };

    case ITEM_GET_ALL_FAILURE:
      return {
        ...state,
        loading : state.loading > 0 ? state.loading - 1 : 0,
        errorMessage: action.payload
      };

      case ITEM_FRT_GET_ALL:
      return {
        ...state,
        loading : state.loading + 1,
        freightCodeList: [] 
      };

    case ITEM_FRT_GET_SUCCESS:
      return {
        ...state,
        loading : state.loading > 0 ? state.loading - 1 : 0,
        freightCodeList: action.payload.data.value,
      };

    case ITEM_FRT_GET_FAILURE:
      return {
        ...state,
        loading : state.loading > 0 ? state.loading - 1 : 0,
        errorMessage: action.payload
      };

    case AIU01GET_ALL:
      return {
        ...state,
        loading : state.loading + 1,
        userLabelsList: [] 
      };

    case AIU01GET_SUCCESS:
      // data is an XML string
      const lbls : IUserLabel[] = [];
      parseString(action.payload.data, (err, result) => {
        const cfg = result._CONFIG;
        for (let i = 1; i <= _.size(cfg); i++) {
          const uName = 'User' + i.toString();
          if (cfg[uName][0].$ !== undefined) {
            const l1 : IUserLabel = { labelName: uName, Caption : cfg[uName][0].$.Caption };
            lbls.push(l1);
          } else {
            const l1 : IUserLabel = { labelName : uName, Caption : uName };
            lbls.push(l1);
          }
        }
      });
      return {
        ...state,
        loading : state.loading > 0 ? state.loading - 1 : 0,
        userLabelsList: lbls,
      };

    case AIU01GET_FAILURE:
      return {
        ...state,
        loading : state.loading > 0 ? state.loading - 1 : 0,
        errorMessage: action.payload
      };


    case ITEM_GETXREF_ALL:
      return {
        ...state,
        loading : state.loading + 1,
        xrefList: [] 
      };

    case ITEM_GETXREF_SUCCESS:
      return {
        ...state,
        xrefList: action.payload.data.value,
        loading : state.loading > 0 ? state.loading - 1 : 0,
      };

    case ITEM_GETXREF_FAILURE:
      return {
        ...state,
        loading : state.loading > 0 ? state.loading - 1 : 0,
        errorMessage: action.payload
      };

    case ITEM_GETSAC_ALL:
      return {
        ...state,
        loading : state.loading + 1,
        xrefList: [] 
      };

    case ITEM_GETSAC_SUCCESS:
      return {
        ...state,
        sacList: action.payload.data.value,
        loading : state.loading > 0 ? state.loading - 1 : 0,
      };

    case ITEM_GETSAC_FAILURE:
      return {
        ...state,
        loading : state.loading > 0 ? state.loading - 1 : 0,
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
            item.Int_Item_No === (action.payload as IUpdateItemAction).Original_Int_Item_No ? (action.payload as IUpdateItemAction).NewItem : item
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
