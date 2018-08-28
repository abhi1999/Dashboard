import {
    GET_LAST_MODIFIED,
    FIXED_DRAWER,
    INSIDE_THE_HEADER,
    SWITCH_LANGUAGE,
    TOGGLE_COLLAPSED_NAV,
    VERTICAL_NAVIGATION,
    WINDOW_WIDTH,
    GET_VERSION_INFO_SUCCESS,
    GET_ERROR_INFO_SUCCESS
} from './../constants/ActionTypes';

const initialSettings = {
    navCollapsed: false,
    drawerType: FIXED_DRAWER,
    width: window.innerWidth,
    isDirectionRTL: false,
    navigationStyle: VERTICAL_NAVIGATION,
    horizontalNavPosition: INSIDE_THE_HEADER,
    locale: {
        languageId: 'english',
        locale: 'en',
        name: 'English',
        icon: 'us'
    },
    versionInfo: [],
    errorInfo: []
};

const settings = (state = initialSettings, action) => {
    switch (action.type) {
        case '@@router/LOCATION_CHANGE':
            return {
                ...state,
                navCollapsed: false
            };
        case TOGGLE_COLLAPSED_NAV:
            return {
                ...state,
                navCollapsed: action.isNavCollapsed
            };
        case WINDOW_WIDTH:
            return {
                ...state,
                width: action.width
            };
        case SWITCH_LANGUAGE:
            return {
                ...state,
                locale: action.payload
            };
        case GET_VERSION_INFO_SUCCESS:
            return {
                ...state,
                versionInfo: action.payload
            };
        case GET_ERROR_INFO_SUCCESS:
            return {
                ...state,
                errorInfo: action.payload
            };
            
        default:
            return state;
    }
};

export default settings;
