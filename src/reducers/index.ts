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
import ErrorCode from './ErrorCode';
import FreightCode from './FreightCode';
import Trade from './Trade';
import KitType from './KitTypeReducer'

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
    freightCode: FreightCode,
    trade:Trade,
    kitType:KitType
})

export default appReducer;