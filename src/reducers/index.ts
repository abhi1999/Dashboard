import * as Notifications from "react-notification-system-redux";
import { combineReducers } from "redux";

import alertsReducer from './alertsReducer';
import mainReducer from "./mainReducer";
import businessFlowReducer from "./businessFlowReducer";
import docReceivedReducer from "./docReceivedReducer";
import productActivityReducer from "./productActivityReducer";
import newsFeedReducer from "./newsFeedReducer";
import topErrorsReducer from "./topErrorsReducer";

import Settings from './Settings';
import Workflow from './Scheduler/WorkflowReducer';
import Task from './Scheduler/TaskReducer';
import Scheduler from './Scheduler/SchedulerReducer';
import Network from './Scheduler/NetworkReducer';
import Database from './Scheduler/DatabaseReducer';
import Folder from './Scheduler/FolderReducer';
import Variable from './Scheduler/VariableReducer';
import Service from './Scheduler/ServiceReducer';
import Carrier from './CarrierReducer';
import Document from './DocumentReducer';
import ErrorCode from './ErrorCode';
import VPNetworks from './vpNetworksReducer';
import FreightCode from './FreightCode';
import Trade from './Trade';
import ShipTo from './ShipTo';
import KitType from './KitTypeReducer'
import PackageSet from './PackageReducer'
import PackageLabelSet from './PackageLabelReducer'
import PseudoTradeSet from './PseudoTradeReducer'
import PartnerDocGroupSet from './PartnerDocGroupReducer'
import ApiTransObjectSet from './ApiTransObjectReducer'
import TradeNetworkSet from './TradeNetworkReducer'
import ItemSetReducer from './ItemSetReducer';
import EdiDocGroupSet from './EdiDocGroupReducer'
import CompanySetting from './CompanyReducer'
import AcctPackageSet from './AcctPackageReducer'

const appReducer = combineReducers({
    alertsReducer,
    mainReducer, 
    businessFlowReducer,
    docReceivedReducer,
    productActivityReducer,
    newsFeedReducer,
    notifications: Notifications.reducer,
    topErrorsReducer,
    settings: Settings,
    workflow: Workflow,
    task: Task,
    scheduler: Scheduler,
    network: Network,
    database: Database,
    folder: Folder,
    variable: Variable,
    service: Service,
    carrier: Carrier,
    errorCode: ErrorCode,
    vpnetworksReducer: VPNetworks,
    freightCode: FreightCode,
    trade:Trade,
    kitType:KitType,
    shipTo:ShipTo,
    packageSet:PackageSet,
    document:Document,
    packageLabelSet:PackageLabelSet,
    pseudoTradeSet:PseudoTradeSet,
    partnerDocGroupSet:PartnerDocGroupSet,
    apiTransObjectSet:ApiTransObjectSet,
    tradeNetworkSet:TradeNetworkSet,
    itemsetReducer : ItemSetReducer,
    ediDocGroupSet:EdiDocGroupSet,
    companySetting:CompanySetting,
    acctPackageSet:AcctPackageSet
})

export default appReducer;