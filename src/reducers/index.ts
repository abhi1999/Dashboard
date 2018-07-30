import * as Notifications from "react-notification-system-redux";
import { combineReducers } from "redux";

import alertsReducer from './alertsReducer';
import businessFlowReducer from "./businessFlowReducer";
import mainReducer from "./mainReducer";
import newsFeedReducer from "./newsFeedReducer";
import topErrorsReducer from "./topErrorsReducer";

const appReducer = combineReducers({
    alertsReducer,
    businessFlowReducer,
    mainReducer, 
    newsFeedReducer,
    notifications: Notifications.reducer,
    topErrorsReducer,
})
export default appReducer;
