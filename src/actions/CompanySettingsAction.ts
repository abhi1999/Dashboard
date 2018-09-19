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
} from "../constants/ActionTypes";
import ODataParams from "../constants/params/oDataParams";
import CompanySettingsModel from "../constants/implementations/CompanySettingsModel";

export const companysettingsGetAll = (params: ODataParams) => {
  return {
    type: COMPANYSETTINGS_GET_ALL,
    payload: params
  };
};

export const companysettingsGetAllSuccess = (
  compSettingsList: CompanySettingsModel[]
) => {
  return {
    type: COMPANYSETTINGS_GET_ALL_SUCCESS,
    payload: compSettingsList
  };
};

export const companysettingsGetAllFailure = error => {
  return {
    type: COMPANYSETTINGS_GET_ALL_FAILURE,
    payload: error
  };
};

export const companysettingsAdd = (compSettings: CompanySettingsModel) => {
  return {
    type: COMPANYSETTINGS_ADD,
    payload: compSettings
  };
};

export const companysettingsAddSuccess = (
  compSettings: CompanySettingsModel
) => {
  return {
    type: COMPANYSETTINGS_ADD_SUCCESS,
    payload: compSettings
  };
};

export const companysettingsAddFailure = error => {
  return {
    type: COMPANYSETTINGS_ADD_FAILURE,
    payload: error
  };
};

export const companysettingsUpdate = (compSettings: CompanySettingsModel) => {
  return {
    type: COMPANYSETTINGS_UPDATE,
    payload: compSettings
  };
};

export const companysettingsUpdateSuccess = (
  compSettings: CompanySettingsModel
) => {
  return {
    type: COMPANYSETTINGS_UPDATE_SUCCESS,
    payload: compSettings
  };
};

export const companysettingsUpdateFailure = error => {
  return {
    type: COMPANYSETTINGS_UPDATE_FAILURE,
    payload: error
  };
};

export const companysettingsDelete = (compSettings: CompanySettingsModel) => {
  return {
    type: COMPANYSETTINGS_DELETE,
    payload: compSettings
  };
};

export const companysettingsDeleteSuccess = (
  compSettings: CompanySettingsModel
) => {
  return {
    type: COMPANYSETTINGS_DELETE_SUCCESS,
    payload: compSettings
  };
};

export const companysettingsDeleteFailure = error => {
  return {
    type: COMPANYSETTINGS_DELETE_FAILURE,
    payload: error
  };
};
