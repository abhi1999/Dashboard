import { 
    API_TRANS_OBJECT_GET_ALL, 
    API_TRANS_OBJECT_GET_ALL_SUCCESS, 
    API_TRANS_OBJECT_GET_ALL_FAILURE
} from './../constants/ActionTypes';

import { IApiTransObject } from '../constants/edidb'
import ODataParams from '../constants/params/oDataParams';

export const apiTransObjectGetAll = (params:ODataParams) => {
    return {
        type: API_TRANS_OBJECT_GET_ALL,
        payload: params
    };
};

export const apiTransObjectGetAllSuccess = (apiTransObjectList:IApiTransObject[]) => {
    return {
        type: API_TRANS_OBJECT_GET_ALL_SUCCESS,
        payload:apiTransObjectList
    }
};

export const apiTransObjectGetAllFailure = (error) => {
    return {
        type: API_TRANS_OBJECT_GET_ALL_FAILURE,
        payload: error
    }
};

