import _ from 'lodash';

import { 
    TRADE_NETWORK_GET_ALL, 
    TRADE_NETWORK_GET_ALL_SUCCESS, 
    TRADE_NETWORK_GET_ALL_FAILURE
} from './../constants/ActionTypes';

const initialSettings = {
  tradeNetworkList : []
};

const tradeNetwork = (state = initialSettings, action) => {
    switch (action.type) {
        case TRADE_NETWORK_GET_ALL:
            return {
              ...state,
              tradeNetworkList : [] // Clear out the list in memory, as we are going to get a new one
            };
        case TRADE_NETWORK_GET_ALL_SUCCESS:
            return {
                ...state,
                tradeNetworkList: action.payload.data.value
            };
        case TRADE_NETWORK_GET_ALL_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default tradeNetwork;
