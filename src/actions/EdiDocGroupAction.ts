import { 
    EDI_DOC_GROUP_GET_ALL, 
    EDI_DOC_GROUP_GET_ALL_SUCCESS, 
    EDI_DOC_GROUP_GET_ALL_FAILURE
} from './../constants/ActionTypes';

import { IEDIDocGroup} from '../constants/edidb'
import ODataParams from '../constants/params/oDataParams';

export const ediDocGroupGetAll = (params:ODataParams) => {
    return {
        type: EDI_DOC_GROUP_GET_ALL,
        payload: params
    };
};

export const ediDocGroupGetAllSuccess = (ediDocGroupList:IEDIDocGroup[]) => {
    return {
        type: EDI_DOC_GROUP_GET_ALL_SUCCESS,
        payload:ediDocGroupList
    }
};

export const ediDocGroupGetAllFailure = (error) => {
    return {
        type: EDI_DOC_GROUP_GET_ALL_FAILURE,
        payload: error
    }
};

