import _ from 'lodash';

import { 
    EDI_DOC_GROUP_GET_ALL, 
    EDI_DOC_GROUP_GET_ALL_SUCCESS, 
    EDI_DOC_GROUP_GET_ALL_FAILURE
} from './../constants/ActionTypes';

const initialSettings = {
  ediDocGroupList : []
};

const ediDocGroup = (state = initialSettings, action) => {
    switch (action.type) {
        case EDI_DOC_GROUP_GET_ALL:
            return {
              ...state,
              ediDocGroupList : [] // Clear out the list in memory, as we are going to get a new one
            };
        case EDI_DOC_GROUP_GET_ALL_SUCCESS:
            return {
                ...state,
                ediDocGroupList: action.payload.data.value
            };
        case EDI_DOC_GROUP_GET_ALL_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default ediDocGroup;
