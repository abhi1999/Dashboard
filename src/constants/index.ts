export const DATA_LOAD_START ="DATA_LOAD_START";
export const DATA_LOAD_ERROR ="DATA_LOAD_ERROR";

export const ADD_TEST_NOTIFICATION = "ADD_TEST_NOTIFICATION";
export const LOAD_NEWS_FEED_SUCCESS = "LOAD_NEWS_FEED_SUCCESS";
export const LOAD_ALERT_GROUP_SUCCESS ="LOAD_ALERT_GROUP_SUCCESS";
export const SET_ALERT_GROUP_PRESET = "SET_ALERT_GROUP_PRESET";
export const LOAD_ALERT_GROUP_PRESETS = "LOAD_ALERT_GROUP_PRESETS";
export const LOAD_ALERT_GROUP_DETAILS_SUCCESS ="LOAD_ALERT_GROUP_DETAILS_SUCCESS";
export const LOAD_EXCEPTION_BY_PROCESS_LOGS = "LOAD_EXCEPTION_BY_PROCESS_LOGS";
export const LOAD_DOC_RECEIVED_COUNT = "LOAD_DOC_RECEIVED_COUNT";

export const LOAD_DASHBOARD_MENU_LIST = "LOAD_DASHBOARD_MENU_LIST";
export const LOAD_DASHBOARD_MENU_ITEM_DETAILS = "LOAD_DASHBOARD_MENU_ITEM_DETAILS";
export const LOAD_PRODUCT_ACTIVITY_SUMMARY = "LOAD_PRODUCT_ACTIVITY_SUMMARY";

export const ErroNotificationOptions = {
    autoDismiss: 10,
    message: '',
    position: 'br',
    title: 'Service Error'
};

// sessionStorage keywords
export const axClientKey = 'ClientKey';       // axios Header key
export const axUsername = 'CachedUserName';   // User name to use in API calls
export const axCompanyID = 'CachedCompanyID'; // Company number selected at startup