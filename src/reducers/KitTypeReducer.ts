import _ from 'lodash';

import { 
    KIT_TYPE_GET_ALL, 
    KIT_TYPE_GET_ALL_SUCCESS, 
    KIT_TYPE_GET_ALL_FAILURE
} from './../constants/ActionTypes';

const initialSettings = {
  kitTypeList : []
};

const kitType = (state = initialSettings, action) => {
    switch (action.type) {
        case KIT_TYPE_GET_ALL:
            return {
              ...state,
              kitTypeList : [] // Clear out the list in memory, as we are going to get a new one
            };
        case KIT_TYPE_GET_ALL_SUCCESS:
            return {
                ...state,
                kitTypeList: action.payload.data.value
            };
        case KIT_TYPE_GET_ALL_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default kitType;
