import { 
    ACCT_PACKAGE_GET_ALL, 
    ACCT_PACKAGE_GET_ALL_SUCCESS, 
    ACCT_PACKAGE_GET_ALL_FAILURE
} from './../constants/ActionTypes';

import { IAcctPackage } from '../constants/edidb'
import ODataParams from '../constants/params/oDataParams';

export const acctPackageGetAll = (params:ODataParams) => {
    return {
        type: ACCT_PACKAGE_GET_ALL,
        payload: params
    };
};

export const acctPackageGetAllSuccess = (acctPackageList:IAcctPackage[]) => {
    return {
        type: ACCT_PACKAGE_GET_ALL_SUCCESS,
        payload:acctPackageList
    }
};

export const acctPackageGetAllFailure = (error) => {
    return {
        type: ACCT_PACKAGE_GET_ALL_FAILURE,
        payload: error
    }
};

