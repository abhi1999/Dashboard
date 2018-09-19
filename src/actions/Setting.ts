import {SWITCH_LANGUAGE, TOGGLE_COLLAPSED_NAV, WINDOW_WIDTH, GET_LAST_MODIFIED, GET_VERSION_INFO, GET_VERSION_INFO_SUCCESS, GET_VERSION_INFO_FAILURE, GET_ERROR_INFO, GET_ERROR_INFO_SUCCESS, GET_ERROR_INFO_FAILURE} from './../constants/ActionTypes';

export function toggleCollapsedNav(isNavCollapsed) {
    return {type: TOGGLE_COLLAPSED_NAV, isNavCollapsed};
}

export function updateWindowWidth(width) {
    return {type: WINDOW_WIDTH, width};
}

export function switchLanguage(locale) {
    return {
        type: SWITCH_LANGUAGE,
        payload: locale
    };
}

export const getVersionInfo = () => {
    return {
        type: GET_VERSION_INFO
    };
};

export const getVersionInfoSuccess = (versionInfo) => {
    return {
        type: GET_VERSION_INFO_SUCCESS,
        payload: versionInfo
    }
};

export const getVersionInfoFailure = (error) => {
    return {
        type: GET_VERSION_INFO_FAILURE,
        payload: error
    }
};

export const getErrorInfo = () => {
    return {
        type: GET_ERROR_INFO
    };
};

export const getErrorInfoSuccess = (errorInfo) => {
    return {
        type: GET_ERROR_INFO_SUCCESS,
        payload: errorInfo
    }
};

export const getErrorInfoFailure = (error) => {
    return {
        type: GET_ERROR_INFO_FAILURE,
        payload: error
    }
};
