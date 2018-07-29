import _ from "lodash";
import {     
    DATA_LOAD_ERROR,
    DATA_LOAD_START, 
    LOAD_DASHBOARD_MENU_ITEM_DETAILS,
    LOAD_DASHBOARD_MENU_LIST,
} from './../constants';

const initialState = {
    dashboardMenuItemDetails:[],
    dashboardMenuItems:[],
    loading:false, 
    navItems:[
        {  
            icon: 'fa fa-home',
            name: 'Dashboard',
            url: '/dashboard',
        },
        {  
            icon: 'icon-star',
            name: 'Favorites',
            url: '/favorites',
        },
        {  
            icon: 'fa fa-dollar',
            name: 'Quote To Cash',
            url: '/QuoteToCash',
        },
        {  
            icon: 'fa - fa-credit-card',
            name: 'Procure To Pay',
            url: '/ProcureToPay',
        },
        {  
            icon: 'fa fa-rocket',
            name: 'Logistics',
            url: '/logistics',
        },
        {  
            icon: 'fa fa-car',
            name: 'Automotive Planning',
            url: '/automotiveplanning',
        },
        {  
            icon: 'fa fa-institution ',
            name: 'Product Management',
            url: '/product',
        },
    ],
}

export const mainReducer = (state = initialState, action)=>{
    if(!action){
        return state;
    }
        
    switch(action.type){
        case DATA_LOAD_START:
            return {
                ...state,
                loading:true
            }
        case DATA_LOAD_ERROR:
            return {
                ...state,
                loading:false
            }
        case LOAD_DASHBOARD_MENU_LIST:
            return {...state, dashboardMenuItems:action.data};
        case LOAD_DASHBOARD_MENU_ITEM_DETAILS:
            const newState = _.cloneDeep(state);
            const item = newState.dashboardMenuItemDetails.find(d=> d.ShortCutID === action.ShortCutID);
            if(item){
                item.values = action.data
            }
            else {
                newState.dashboardMenuItemDetails.push({ShortCutID:action.ShortCutID, values:action.data})
            }
            return {...newState};
        default:
            return state;
    }
}

export default mainReducer;