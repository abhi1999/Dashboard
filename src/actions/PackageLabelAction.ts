import { 
    PACKAGE_LABEL_GET_ALL, 
    PACKAGE_LABEL_GET_ALL_SUCCESS, 
    PACKAGE_LABEL_GET_ALL_FAILURE
} from './../constants/ActionTypes';

import { IPackageLabel } from '../constants/edidb'
import ODataParams from '../constants/params/oDataParams';

export const packageLabelGetAll = (params:ODataParams) => {
    return {
        type: PACKAGE_LABEL_GET_ALL,
        payload: params
    };
};

export const packageLabelGetAllSuccess = (packageLabelList:IPackageLabel[]) => {
    return {
        type: PACKAGE_LABEL_GET_ALL_SUCCESS,
        payload:packageLabelList
    }
};

export const packageLabelGetAllFailure = (error) => {
    return {
        type: PACKAGE_LABEL_GET_ALL_FAILURE,
        payload: error
    }
};

