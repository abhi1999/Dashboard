import _ from 'lodash';

import { 
    ACCT_PACKAGE_GET_ALL, 
    ACCT_PACKAGE_GET_ALL_SUCCESS, 
    ACCT_PACKAGE_GET_ALL_FAILURE
} from './../constants/ActionTypes';

const initialSettings = {
  acctPackageList : []
};

const acctPackage = (state = initialSettings, action) => {
    switch (action.type) {
        case ACCT_PACKAGE_GET_ALL:
            return {
              ...state,
              acctPackageList : [] // Clear out the list in memory, as we are going to get a new one
            };
        case ACCT_PACKAGE_GET_ALL_SUCCESS:
            return {
                ...state,
                acctPackageList: action.payload.data.value
            };
        case ACCT_PACKAGE_GET_ALL_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default acctPackage;
