import _ from 'lodash';
import uuid from 'uuid-v4';

import { 
    COMPANYSETTINGS_GET_ALL, 
    COMPANYSETTINGS_GET_ALL_SUCCESS, 
    COMPANYSETTINGS_GET_ALL_FAILURE, 
    COMPANYSETTINGS_ADD, 
    COMPANYSETTINGS_ADD_SUCCESS, 
    COMPANYSETTINGS_ADD_FAILURE, 
    COMPANYSETTINGS_UPDATE, 
    COMPANYSETTINGS_UPDATE_SUCCESS, 
    COMPANYSETTINGS_UPDATE_FAILURE,
    COMPANYSETTINGS_DELETE, 
    COMPANYSETTINGS_DELETE_SUCCESS, 
    COMPANYSETTINGS_DELETE_FAILURE 
} from './../constants/ActionTypes';

import CompanyModel from "../constants/implementations/CompanySettingsModel";

const initialSettings = {
  companyModel : []
};

const config = (state = initialSettings, action) => {
    switch (action.type) {
        case COMPANYSETTINGS_GET_ALL:
            return {
              ...state,
              companyModel : [] // Clear out the list in memory, as we are going to get a new one
            };

        case COMPANYSETTINGS_GET_ALL_SUCCESS:
            return {
                ...state,
                companyModel: action.payload.data
            };

        case COMPANYSETTINGS_GET_ALL_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };

        case COMPANYSETTINGS_ADD:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };

        case COMPANYSETTINGS_ADD_SUCCESS:
            return {
                ...state,
                companyModel: action.payload 
            };

        case COMPANYSETTINGS_ADD_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };

        case COMPANYSETTINGS_UPDATE:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };

        case COMPANYSETTINGS_UPDATE_SUCCESS:
            return {
                ...state,
                companyModel: action.payload 
            };

        case COMPANYSETTINGS_UPDATE_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };

        default:
            return state;
    }
};

export default config;
