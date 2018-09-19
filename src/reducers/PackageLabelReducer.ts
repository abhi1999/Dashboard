import _ from 'lodash';

import { 
    PACKAGE_LABEL_GET_ALL, 
    PACKAGE_LABEL_GET_ALL_SUCCESS, 
    PACKAGE_LABEL_GET_ALL_FAILURE
} from './../constants/ActionTypes';

const initialSettings = {
  packageLabelList : []
};

const packageLabelSet = (state = initialSettings, action) => {
    switch (action.type) {
        case PACKAGE_LABEL_GET_ALL:
            return {
              ...state,
              packageLabelList : [] // Clear out the list in memory, as we are going to get a new one
            };
        case PACKAGE_LABEL_GET_ALL_SUCCESS:
            return {
                ...state,
                packageLabelList: action.payload.data
            };
        case PACKAGE_LABEL_GET_ALL_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default packageLabelSet;
