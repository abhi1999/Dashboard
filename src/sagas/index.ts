import {all} from 'redux-saga/effects';
import workflowSagas from "./Workflow";
import taskSagas from "./Task";
import schedulerSagas from "./Scheduler";
import networkSagas from "./Network";
import databaseSagas from "./Database";
import folderSagas from "./Folder";
import variableSagas from "./Variable";
import settingSagas from "./Setting";
import serviceSagas from "./Service";
import carrierSagas from "./Carrier";
import errorCodeSagas from "./ErrorCode";

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
        errorCodeSagas()
    ]);
}
