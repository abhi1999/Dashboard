import { 
    PACKAGE_GET_ALL, 
    PACKAGE_GET_ALL_SUCCESS, 
    PACKAGE_GET_ALL_FAILURE
} from './../constants/ActionTypes';

import { IPackage } from '../constants/edidb'
import ODataParams from '../constants/params/oDataParams';

export const packageGetAll = (params:ODataParams) => {
    return {
        type: PACKAGE_GET_ALL,
        payload: params
    };
};

export const packageGetAllSuccess = (packageList:IPackage[]) => {
    return {
        type: PACKAGE_GET_ALL_SUCCESS,
        payload:packageList
    }
};

export const packageGetAllFailure = (error) => {
    return {
        type: PACKAGE_GET_ALL_FAILURE,
        payload: error
    }
};

