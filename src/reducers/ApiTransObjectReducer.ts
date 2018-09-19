import _ from 'lodash';

import { 
    API_TRANS_OBJECT_GET_ALL, 
    API_TRANS_OBJECT_GET_ALL_SUCCESS, 
    API_TRANS_OBJECT_GET_ALL_FAILURE
} from './../constants/ActionTypes';

const initialSettings = {
  apiTransObjectList : []
};

const apiTransObject = (state = initialSettings, action) => {
    switch (action.type) {
        case API_TRANS_OBJECT_GET_ALL:
            return {
              ...state,
              apiTransObjectList : [] // Clear out the list in memory, as we are going to get a new one
            };
        case API_TRANS_OBJECT_GET_ALL_SUCCESS:
            return {
                ...state,
                apiTransObjectList: action.payload.data.value
            };
        case API_TRANS_OBJECT_GET_ALL_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default apiTransObject;
