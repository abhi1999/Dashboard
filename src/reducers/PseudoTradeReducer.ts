import _ from 'lodash';

import { 
    PSEUDO_TRADE_GET_ALL, 
    PSEUDO_TRADE_GET_ALL_SUCCESS, 
    PSEUDO_TRADE_GET_ALL_FAILURE
} from './../constants/ActionTypes';

const initialSettings = {
  pseudoTradeList : []
};

const pseudoTrade = (state = initialSettings, action) => {
    switch (action.type) {
        case PSEUDO_TRADE_GET_ALL:
            return {
              ...state,
              pseudoTradeList : [] // Clear out the list in memory, as we are going to get a new one
            };
        case PSEUDO_TRADE_GET_ALL_SUCCESS:
            return {
                ...state,
                pseudoTradeList: action.payload.data.value
            };
        case PSEUDO_TRADE_GET_ALL_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default pseudoTrade;
