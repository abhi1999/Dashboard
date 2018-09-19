import _ from 'lodash';
import uuid from 'uuid-v4';

import { 
    PARTNER_DOC_GROUP_GET_ALL, 
    PARTNER_DOC_GROUP_GET_ALL_SUCCESS, 
    PARTNER_DOC_GROUP_GET_ALL_FAILURE,
    PARTNER_DOC_GROUP_ADD, 
    PARTNER_DOC_GROUP_ADD_SUCCESS, 
    PARTNER_DOC_GROUP_ADD_FAILURE, 
    PARTNER_DOC_GROUP_DELETE, 
    PARTNER_DOC_GROUP_DELETE_SUCCESS, 
    PARTNER_DOC_GROUP_DELETE_FAILURE 
} from './../constants/ActionTypes';

import PartnerDocGroupModel from './../constants/implementations/PartnerDocGroupModel'

const initialSettings = {
  partnerDocGroupList : []
};

const partnerDocGroup = (state = initialSettings, action) => {
    switch (action.type) {
        case PARTNER_DOC_GROUP_GET_ALL:
            return {
              ...state,
              partnerDocGroupList : [] // Clear out the list in memory, as we are going to get a new one
            };
        case PARTNER_DOC_GROUP_GET_ALL_SUCCESS:
            return {
                ...state,
                partnerDocGroupList: action.payload.data.value.map(item => ({ ...item, Id : uuid() })), // Give these a unique Id
            };
        case PARTNER_DOC_GROUP_GET_ALL_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
            case PARTNER_DOC_GROUP_ADD:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case PARTNER_DOC_GROUP_ADD_SUCCESS:
            return {
                ...state,
                // partnerDocGroupList: state.partnerDocGroupList.concat({ ...action.payload, Id : uuid() }) // Add an id for react
                
            };
        case PARTNER_DOC_GROUP_ADD_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };

        case PARTNER_DOC_GROUP_DELETE:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case PARTNER_DOC_GROUP_DELETE_SUCCESS:
            return {
                ...state,
                partnerDocGroupList: state.partnerDocGroupList.filter(
                    (partnerDocGroupRec:PartnerDocGroupModel) => partnerDocGroupRec.Id !== action.payload.Id)
                // Update the partnerDocGroupList to remove the one that was deleted
            };
        case PARTNER_DOC_GROUP_DELETE_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };

        default:
            return state;
    }
};

export default partnerDocGroup;
