import { all, call, put, takeLatest } from 'redux-saga/effects';
import { axiosSched } from '../../configs/axios'
import { 
    FOLDER_GET_ALL,
    FOLDER_ADD,
    FOLDER_UPDATE,
    FOLDER_DELETE
} from '../../constants/ActionTypes';
import { folderGetAllSuccess, folderGetAllFailure } from '../../actions/Scheduler/FolderAction';
import { folderAddSuccess, folderAddFailure } from '../../actions/Scheduler/FolderAction';
import { folderUpdateSuccess, folderUpdateFailure } from '../../actions/Scheduler/FolderAction';
import { folderDeleteSuccess, folderDeleteFailure } from '../../actions/Scheduler/FolderAction';
import Notifications from 'react-notification-system-redux';
import { ERROR_OPTIONS } from '../../constants/ServiceParameters';
import Folder from '../../constants/scheduler/folder';

function* folderGetAllRequest() {
    try {
        const folderList = yield call(folderGetAllApi);
        yield put(folderGetAllSuccess(folderList));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(folderGetAllFailure(error));
    }
}

export const folderGetAllApi = () => {

    const url:string = "/api/workflow/config/folders";

    return axiosSched.get(url);
};

function* folderAddRequest(action) {
    try {
        yield call(folderAddApi, action);
        yield put(folderAddSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(folderAddFailure(error));
    }
}

export const folderAddApi = (action) => {

    const folder:Folder = action.payload;
    const url:string = "/api/workflow/config/folders";

    return axiosSched.post(url, folder);
};

function* folderUpdateRequest(action) {
    try {
        yield call(folderUpdateApi, action);
        yield put(folderUpdateSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(folderUpdateFailure(error));
    }
  }

export const folderUpdateApi = (action) => {

    const folder:Folder = action.payload;
    const url:string = "/api/workflow/config/folders";

    return axiosSched.put(url, folder);
};

function* folderDeleteRequest(action) {
    try {
        yield call(folderDeleteApi, action);
        yield put(folderDeleteSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(folderDeleteFailure(error));
    }
  }


export const folderDeleteApi = (action) => {

    const folder:Folder = action.payload;
    const url:string = "/api/workflow/config/folders/" + folder.Id + "/" + folder.ClientId + "/" + folder.LastModified;


    return axiosSched.delete(url);
};

export default function* rootSaga() {
    yield all([
        takeLatest(FOLDER_GET_ALL, folderGetAllRequest),
        takeLatest(FOLDER_ADD, folderAddRequest),
        takeLatest(FOLDER_UPDATE, folderUpdateRequest),
        takeLatest(FOLDER_DELETE, folderDeleteRequest)
    ]);
}
