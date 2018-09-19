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
import documentSagas from "./DocumentSaga";
import errorCodeSagas from "./ErrorCode";
import vpNetworkSagas from "./vpNetworkSaga";
import freightCodeSagas from "./FreightCode";
import tradeSagas from "./Trade";
import kitTypeSagas from "./KitType";
import shipToSagas from "./ShipTo";
import packageSagas from "./Package";
import itemSagas from './ItemSaga';
import partnerDocGroupSagas from './PartnerDocGroupSaga';
import pseudoTradeSagas from './PseudoTradeSaga'
import packageLabelSagas from './PackageLabel'
import apiTransObjectSagas from './ApiTransObjectSaga'
import ediDocGroupSagas from './EdiDocGroupSaga'
import companySettingSagas from './CompanySettingSaga'
import acctPackageSagas from './AcctPackageSaga'

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
        documentSagas(),
        errorCodeSagas(),
        freightCodeSagas(),
        vpNetworkSagas(),
        tradeSagas(),
        kitTypeSagas(),
        shipToSagas(),
        packageSagas(),
        itemSagas(),
        partnerDocGroupSagas(),
        pseudoTradeSagas(),
        packageLabelSagas(),
        apiTransObjectSagas(),
        ediDocGroupSagas(),
        companySettingSagas(),
        acctPackageSagas(),
    ]);
}
