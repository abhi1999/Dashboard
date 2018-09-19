import _ from 'lodash';

import { 
    PACKAGE_GET_ALL, 
    PACKAGE_GET_ALL_SUCCESS, 
    PACKAGE_GET_ALL_FAILURE
} from './../constants/ActionTypes';

const initialSettings = {
  packageList : []
};

const config = (state = initialSettings, action) => {
    switch (action.type) {
        case PACKAGE_GET_ALL:
            return {
              ...state,
              packageList : [] // Clear out the list in memory, as we are going to get a new one
            };
        case PACKAGE_GET_ALL_SUCCESS:
            return {
                ...state,
                packageList: action.payload.data.value
            };
        case PACKAGE_GET_ALL_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default config;
