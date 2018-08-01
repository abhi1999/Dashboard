import * as Notifications from "react-notification-system-redux";
import { combineReducers } from "redux";

import alertsReducer from './alertsReducer';
import businessFlowReducer from "./businessFlowReducer";
import docReceivedReducer from "./docReceivedReducer"
import mainReducer from "./mainReducer";
import newsFeedReducer from "./newsFeedReducer";
import productActivityReducer from "./productActivityReducer"
import topErrorsReducer from "./topErrorsReducer";

const appReducer = combineReducers({
    alertsReducer,
    businessFlowReducer,
    docReceivedReducer,
    mainReducer, 
    newsFeedReducer,
    notifications: Notifications.reducer,
    productActivityReducer,
    topErrorsReducer,
})
export default appReducer;
