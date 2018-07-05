import * as Notifications from "react-notification-system-redux";
import { combineReducers } from "redux";

import mainReducer from "./mainReducer";

const appReducer = combineReducers({
    mainReducer, 
    notifications: Notifications.reducer
})
export default appReducer;
