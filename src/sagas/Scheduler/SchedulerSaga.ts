import { all, call, put, takeLatest } from 'redux-saga/effects';
import { axiosSched } from '../../configs/axios'
import { 
    SCHEDULER_GET_ALL,
    SCHEDULER_ADD,
    SCHEDULER_UPDATE,
    SCHEDULER_DELETE
} from '../../constants/ActionTypes';
import { schedulerGetAllSuccess, schedulerGetAllFailure } from '../../actions/Scheduler/SchedulerAction';
import { schedulerAddSuccess, schedulerAddFailure } from '../../actions/Scheduler/SchedulerAction';
import { schedulerUpdateSuccess, schedulerUpdateFailure } from '../../actions/Scheduler/SchedulerAction';
import { schedulerDeleteSuccess, schedulerDeleteFailure } from '../../actions/Scheduler/SchedulerAction';
import Notifications from 'react-notification-system-redux';
import { ERROR_OPTIONS } from '../../constants/ServiceParameters';
import Scheduler from '../../constants/scheduler/scheduler';
import { axClientKey } from '../../constants';

function* schedulerGetAllRequest() {
    try {
        const schedulerList = yield call(schedulerGetAllApi);
        yield put(schedulerGetAllSuccess(schedulerList));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(schedulerGetAllFailure(error));
    }
}

export const schedulerGetAllApi = () => {

    const url:string = "/api/workflow/config/schedulers";

    return axiosSched.get(url);
};

function* schedulerAddRequest(action) {
    try {
        yield call(schedulerAddApi, action);
        yield put(schedulerAddSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(schedulerAddFailure(error));
    }
}

export const schedulerAddApi = (action) => {

    const scheduler:Scheduler = action.payload;
    const url:string = "/api/workflow/config/schedulers";

    return axiosSched.post(url, scheduler);
};

function* schedulerUpdateRequest(action) {
    try {
        yield call(schedulerUpdateApi, action);
        yield put(schedulerUpdateSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(schedulerUpdateFailure(error));
    }
  }

export const schedulerUpdateApi = (action) => {

    const scheduler:Scheduler = action.payload;
    const url:string = "/api/workflow/config/schedulers";

    return axiosSched.put(url, scheduler);
};

function* schedulerDeleteRequest(action) {
    try {
        yield call(schedulerDeleteApi, action);
        yield put(schedulerDeleteSuccess(action.payload));
    } catch (error) {
        console.log(error);
        yield put(Notifications.error({ ...ERROR_OPTIONS, message: error.message }));
        yield put(schedulerDeleteFailure(error));
    }
  }


export const schedulerDeleteApi = (action) => {

    const scheduler:Scheduler = action.payload;
    const url:string = "/api/workflow/config/schedulers/" + scheduler.Id + "/" + scheduler.ClientId + "/" + scheduler.LastModified;

    return axiosSched.delete(url);
};

export default function* rootSaga() {
    yield all([
        takeLatest(SCHEDULER_GET_ALL, schedulerGetAllRequest),
        takeLatest(SCHEDULER_ADD, schedulerAddRequest),
        takeLatest(SCHEDULER_UPDATE, schedulerUpdateRequest),
        takeLatest(SCHEDULER_DELETE, schedulerDeleteRequest)
    ]);
}
