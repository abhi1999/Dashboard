import {all} from 'redux-saga/effects';
import workflowSagas from "./Scheduler/WorkflowSaga";
import taskSagas from "./Scheduler/TaskSaga";
import schedulerSagas from "./Scheduler/SchedulerSaga";
import networkSagas from "./Scheduler/NetworkSaga";
import databaseSagas from "./Scheduler/DatabaseSaga";
import folderSagas from "./Scheduler/FolderSaga";
import variableSagas from "./Scheduler/VariableSaga";
import settingSagas from "./Setting";
import serviceSagas from "./Scheduler/ServiceSaga";
import carrierSagas from "./CarrierSaga";
import errorCodeSagas from "./ErrorCode";
import freightCodeSagas from "./FreightCode";
import tradeSagas from "./Trade";
import kitTypeSagas from "./KitType"

export default function* rootSaga(getState:any) {
    yield all([
        workflowSagas(),
        taskSagas(),
        schedulerSagas(),
        networkSagas(),
        databaseSagas(),
        folderSagas(),
        variableSagas(),
        settingSagas(),
        serviceSagas(),
        carrierSagas(),
        errorCodeSagas(),
        freightCodeSagas(),
        tradeSagas(),
        kitTypeSagas()
    ]);
}
