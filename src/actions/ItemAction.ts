
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
} from '../constants/ActionTypes';
import { IItem } from "../constants/edidb";
import ODataParams from '../constants/params/oDataParams';

export const itemGetAll = (params:ODataParams) => {
    return {
        type: ITEM_GET_ALL,
        payload: params
    };
};

export const itemGetAllSuccess = (itemList:IItem[]) => {
    return {
        type: ITEM_GET_ALL_SUCCESS,
        payload: itemList
    }
};

export const itemGetAllFailure = (error) => {
    return {
        type: ITEM_GET_ALL_FAILURE,
        payload: error
    }
};

export const itemAdd = (item:IItem) => {
    return {
        type: ITEM_ADD,
        payload: item
    };
};

export const itemAddSuccess = (item:IItem) => {
    return {
        type: ITEM_ADD_SUCCESS,
        payload: item
    }
};

export const itemAddFailure = (error) => {
    return {
        type: ITEM_ADD_FAILURE,
        payload: error
    }
};

export const itemUpdate = (item:IItem) => {
    return {
        type: ITEM_UPDATE,
        payload: item
    };
};

export const itemUpdateSuccess = (item:IItem) => {
    return {
        type: ITEM_UPDATE_SUCCESS,
        payload: item
    }
};

export const itemUpdateFailure = (error) => {
    return {
        type: ITEM_UPDATE_FAILURE,
        payload: error
    }
};

export const itemDelete = (item:IItem) => {
    return {
        type: ITEM_DELETE,
        payload: item
    };
};

export const itemDeleteSuccess = (item:IItem) => {
    return {
        type: ITEM_DELETE_SUCCESS,
        payload: item
    }
};

export const itemDeleteFailure = (error) => {
    return {
        type: ITEM_DELETE_FAILURE,
        payload: error
    }
};
