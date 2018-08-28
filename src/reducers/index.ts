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
import Workflow from './Workflow';
import Task from './Task';
import Scheduler from './Scheduler';
import Network from './Network';
import Database from './Database';
import Folder from './Folder';
import Variable from './Variable';
import Service from './Service';
import Carrier from './Carrier';
import ErrorCode from './ErrorCode';

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
    errorCode: ErrorCode
})

export default appReducer;