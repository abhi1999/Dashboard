import lodash from "lodash";
import { LOAD_ALERT_GROUP_SUCCESS, LOAD_DATA, LOAD_ERROR, LOAD_NEWS_FEED_SUCCESS } from './../constants';

const initialState = {
    alertGroupSet:[],
    loading:false, 
    navItems:[
        {  
            badge: { variant: 'info', text: 'NEW' },
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
            url: '/q2c',
        },
        {  
            icon: 'fa - fa-credit-card',
            name: 'Procure to Pay',
            url: '/p2p',
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
    newsFeeds:{},
}

export const mainReducer = (state = initialState, action)=>{
    if(!action){
        return state;
    }
        
    switch(action.type){
        case LOAD_DATA:
            return {
                ...state,
                loading:true
            }
        case LOAD_NEWS_FEED_SUCCESS:
            return {
                ...state,
                newsFeeds:action.data,
            }
        case LOAD_ALERT_GROUP_SUCCESS:
            return {
                ...state,
                alertGroupSet:action.data
            }
        case LOAD_ERROR:
            return {
                ...state,
                loading:false
            }
        default:
            return state;
    }
}

export default mainReducer;