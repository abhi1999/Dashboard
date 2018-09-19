import _ from 'lodash';

import {
    TRADE_GET_ALL,
    TRADE_GET_ALL_SUCCESS,
    TRADE_GET_ALL_FAILURE,
    TRADE_ADD,
    TRADE_ADD_SUCCESS,
    TRADE_ADD_FAILURE,
    TRADE_UPDATE,
    TRADE_UPDATE_SUCCESS,
    TRADE_UPDATE_FAILURE,
    TRADE_DELETE,
    TRADE_DELETE_SUCCESS,
    TRADE_DELETE_FAILURE,
    TRADE_UPDATE_MAPS,
    TRADE_UPDATE_MAPS_SUCCESS,
    TRADE_UPDATE_MAPS_FAILURE
} from './../constants/ActionTypes';

import { ITrade } from "../constants/edidb";
import { MapSetting } from "../constants/MapSetting"

const initialSettings = {
    tradeList: [],
    mapList:[]
};

const config = (state = initialSettings, action) => {
    switch (action.type) {
        case TRADE_GET_ALL:
            return {
                ...state,
                tradeList: [] // Clear out the list in memory, as we are going to get a new one
            };
        case TRADE_GET_ALL_SUCCESS:
            return {
                ...state,
                // tradeList: action.payload.data.value.map(item => ({ ...item })), // Give these a unique Id
                tradeList: action.payload.data.value,
                tradeListCount: action.payload.data['@odata.count']
            };
        case TRADE_GET_ALL_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case TRADE_ADD:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case TRADE_ADD_SUCCESS:
            return {
                ...state,
                tradeList: state.tradeList.concat({ ...action.payload }) // Add an id for react
            };
        case TRADE_ADD_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case TRADE_UPDATE:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case TRADE_UPDATE_SUCCESS:
            return {
                ...state,
                tradeList: state.tradeList.map(
                    (trade: ITrade) =>
                        trade.TP_PartID === action.payload.TP_PartID ? action.payload : trade
                ) // Update the freightCodeList with the one that has changed
            };
        case TRADE_UPDATE_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case TRADE_DELETE:
            return {
                ...state // This is just dispatching the action, so nothing to change
            };
        case TRADE_DELETE_SUCCESS:
            return {
                ...state,
                tradeList: state.tradeList.filter(
                    (trade: ITrade) => trade.TP_PartID !== action.payload.TP_PartID)
                // Update the tradeList to remove the one that was deleted
            };
        case TRADE_DELETE_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case TRADE_UPDATE_MAPS:
            return {
                ...state
            };
        case TRADE_UPDATE_MAPS_SUCCESS:
            return {
                ...state,    // need to deal with actual return value - status of whether or not each map updated
                mapList:action.payload
            };
        case TRADE_UPDATE_MAPS_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default config;
