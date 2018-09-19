import { 
    PARTNER_DOC_GROUP_GET_ALL, 
    PARTNER_DOC_GROUP_GET_ALL_SUCCESS, 
    PARTNER_DOC_GROUP_GET_ALL_FAILURE,
    PARTNER_DOC_GROUP_ADD, 
    PARTNER_DOC_GROUP_ADD_SUCCESS, 
    PARTNER_DOC_GROUP_ADD_FAILURE, 
    PARTNER_DOC_GROUP_UPDATE, 
    PARTNER_DOC_GROUP_UPDATE_SUCCESS, 
    PARTNER_DOC_GROUP_UPDATE_FAILURE,
    PARTNER_DOC_GROUP_DELETE, 
    PARTNER_DOC_GROUP_DELETE_SUCCESS, 
    PARTNER_DOC_GROUP_DELETE_FAILURE 
} from './../constants/ActionTypes';

import { IPartnerDocGroup } from '../constants/edidb'
import ODataParams from '../constants/params/oDataParams';

export const partnerDocGroupGetAll = (params:ODataParams) => {
    return {
        type: PARTNER_DOC_GROUP_GET_ALL,
        payload: params
    };
};

export const partnerDocGroupGetAllSuccess = (partnerDocGroupList:IPartnerDocGroup[]) => {
    return {
        type: PARTNER_DOC_GROUP_GET_ALL_SUCCESS,
        payload:partnerDocGroupList
    }
};

export const partnerDocGroupGetAllFailure = (error) => {
    return {
        type: PARTNER_DOC_GROUP_GET_ALL_FAILURE,
        payload: error
    }
};

export const partnerDocGroupAdd = (partnerDocGroup:IPartnerDocGroup) => {
    return {
        type: PARTNER_DOC_GROUP_ADD,
        payload: partnerDocGroup
    };
};

export const partnerDocGroupAddSuccess = (partnerDocGroup:IPartnerDocGroup) => {
    return {
        type: PARTNER_DOC_GROUP_ADD_SUCCESS,
        payload: partnerDocGroup
    }
};

export const partnerDocGroupAddFailure = (error) => {
    return {
        type: PARTNER_DOC_GROUP_ADD_FAILURE,
        payload: error
    }
};

export const partnerDocGroupUpdate = (partnerDocGroup:IPartnerDocGroup) => {
    return {
        type: PARTNER_DOC_GROUP_UPDATE,
        payload: partnerDocGroup
    };
};

export const partnerDocGroupUpdateSuccess = (partnerDocGroup:IPartnerDocGroup) => {
    return {
        type: PARTNER_DOC_GROUP_UPDATE_SUCCESS,
        payload: partnerDocGroup
    }
};

export const partnerDocGroupUpdateFailure = (error) => {
    return {
        type: PARTNER_DOC_GROUP_UPDATE_FAILURE,
        payload: error
    }
};

export const partnerDocGroupDelete = (partnerDocGroup:IPartnerDocGroup) => {
    return {
        type: PARTNER_DOC_GROUP_DELETE,
        payload: partnerDocGroup
    };
};

export const partnerDocGroupDeleteSuccess = (partnerDocGroup:IPartnerDocGroup) => {
    return {
        type: PARTNER_DOC_GROUP_DELETE_SUCCESS,
        payload: partnerDocGroup
    }
};

export const partnerDocGroupDeleteFailure = (error) => {
    return {
        type: PARTNER_DOC_GROUP_DELETE_FAILURE,
        payload: error
    }
};
