import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "../configs/axios";
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
import Notifications from "react-notification-system-redux";
import { ERROR_OPTIONS } from "../constants/ServiceParameters";
import buildQuery from "odata-query";
import {
  companysettingsAdd,
  companysettingsAddFailure,
  companysettingsAddSuccess,
  companysettingsDelete,
  companysettingsDeleteFailure,
  companysettingsDeleteSuccess,
  companysettingsGetAll,
  companysettingsGetAllFailure,
  companysettingsGetAllSuccess,
  companysettingsUpdate,
  companysettingsUpdateFailure,
  companysettingsUpdateSuccess
} from '../actions/CompanySettingsAction';
import CompanySettingsModel from "./../constants/implementations/CompanySettingsModel"
import { acctPackageGetAllApi} from '../sagas/AcctPackageSaga'
import { acctPackageGetAllSuccess } from './../actions/AcctPackageAction';

function* companysettingsGetAllRequest(action: any) {
  try {
    const acctPackageList = yield call(acctPackageGetAllApi)
    yield put(acctPackageGetAllSuccess(acctPackageList));
    const companySetting: any = yield call(
      companysettingsGetAllApi,
      action
    );
    yield put(companysettingsGetAllSuccess(companySetting));
  } catch (error) {
    yield put(
      Notifications.error({
        ...ERROR_OPTIONS,
        message: error.config.url
      })
    );
    yield put(companysettingsGetAllFailure(error));
  }
}

export const companysettingsGetAllApi = (action: any) => {
  
  const companyID:string = action.payload;
  const endpoint: string = "/odata/CompanySet(" + companyID + ")";

  const url: string = endpoint;

  console.log("companysettingsGetAllApi: " + url);
  return axios.get(url);
};

function* companysettingsUpdateRequest(action:any) {
  try {
      yield call(companysettingsUpdateApi, action);
      yield put(companysettingsUpdateSuccess(action.payload));
  } catch (error) {
      console.log(error);
      yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
      yield put(companysettingsUpdateFailure(error));
  }
}

export const companysettingsUpdateApi = (action:any) => {

  const company:CompanySettingsModel = action.payload;
  const url:string =  "/api/Company/Update/";

  return axios.patch(url, company);
};

export default function* rootSaga() {
  yield all([
      takeLatest(COMPANYSETTINGS_GET_ALL, companysettingsGetAllRequest),
      takeLatest(COMPANYSETTINGS_UPDATE, companysettingsUpdateRequest),
      
  ]);
}