import { 
    KIT_TYPE_GET_ALL, 
    KIT_TYPE_GET_ALL_SUCCESS, 
    KIT_TYPE_GET_ALL_FAILURE
} from './../constants/ActionTypes';

import { IKitType } from '../constants/edidb'
import ODataParams from '../constants/params/oDataParams';

export const kitTypeGetAll = (params:ODataParams) => {
    return {
        type: KIT_TYPE_GET_ALL,
        payload: params
    };
};

export const kitTypeGetAllSuccess = (kitTypeList:IKitType[]) => {
    return {
        type: KIT_TYPE_GET_ALL_SUCCESS,
        payload:kitTypeList
    }
};

export const kitTypeGetAllFailure = (error) => {
    return {
        type: KIT_TYPE_GET_ALL_FAILURE,
        payload: error
    }
};

