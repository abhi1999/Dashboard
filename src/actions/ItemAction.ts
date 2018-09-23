
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
    ITEM_GETXREF_ALL,
    ITEM_GETXREF_FAILURE,
    ITEM_GETXREF_SUCCESS,
    ITEM_GETSAC_ALL,
    ITEM_GETSAC_FAILURE,
    ITEM_GETSAC_SUCCESS,
    AIU01GET_ALL,
    AIU01GET_FAILURE,
    AIU01GET_SUCCESS,
    ITEM_FRT_GET_ALL,
    ITEM_FRT_GET_FAILURE,
    ITEM_FRT_GET_SUCCESS
} from '../constants/ActionTypes';
import { IItemCust, IAPIsacXRef, IItem, IFreightCode } from "../constants/edidb";
import ODataParams from '../constants/params/oDataParams';

export interface IUpdateItemAction {
    Original_Int_Item_No : string,
    NewItem : IItem
}

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

export const itemFrtGetAll = () => {
    return {
        type: ITEM_FRT_GET_ALL,
    };
};

export const itemFrtGetAllSuccess = (itemList:IFreightCode[]) => {
    return {
        type: ITEM_FRT_GET_SUCCESS,
        payload: itemList
    }
};

export const itemFrtGetAllFailure = (error) => {
    return {
        type: ITEM_FRT_GET_FAILURE,
        payload: error
    }
};

export const itemGetXrefAll = (params:ODataParams) => {
    return {
        type: ITEM_GETXREF_ALL,
        payload: params
    };
};

export const itemGetXrefAllSuccess = (xrefList:IItemCust[]) => {
    return {
        type: ITEM_GETXREF_SUCCESS,
        payload: xrefList
    }
};

export const itemGetXrefAllFailure = (error) => {
    return {
        type: ITEM_GETXREF_FAILURE,
        payload: error
    }
};

export const itemGetSacAll = (params:ODataParams) => {
    return {
        type: ITEM_GETSAC_ALL,
        payload: params
    };
};

export const itemGetSacAllSuccess = (xrefList:IAPIsacXRef[]) => {
    return {
        type: ITEM_GETSAC_SUCCESS,
        payload: xrefList
    }
};

export const itemGetSacAllFailure = (error) => {
    return {
        type: ITEM_GETSAC_FAILURE,
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

export const itemXrefAdd = (xref:IItemCust) => {
    return {
        type: ITEM_ADD,
        payload: xref
    };
};

export const itemXrefAddSuccess = (item:IItemCust) => {
    return {
        type: ITEM_ADD_SUCCESS,
        payload: item
    }
};

export const itemXrefAddFailure = (error) => {
    return {
        type: ITEM_ADD_FAILURE,
        payload: error
    }
};

export const itemUpdate = (itemNo : string, item:IItem) => {
    const pld : IUpdateItemAction = { Original_Int_Item_No : itemNo, NewItem : item }
    return {
        type: ITEM_UPDATE,
        payload:pld
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

export const itemAIU01Get = () => {
    return {
        type: AIU01GET_ALL,
    };
};

export const itemAIU01Success = (labels:string[]) => {
    return {
        type: AIU01GET_SUCCESS,
        payload: labels
    }
};

export const itemAIUFailure = (error) => {
    return {
        type: AIU01GET_FAILURE,
        payload: error
    }
};