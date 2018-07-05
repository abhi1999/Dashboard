import lodash from "lodash";
import { LOAD_DATA, LOAD_ERROR, LOAD_NEWS_FEED_SUCCESS } from './../constants';

const initialState = {
    loading:false, 
    navItems:[
        {  
            badge: { variant: 'info', text: 'NEW' },
            icon: 'icon-speedometer',
            name: 'Dashboard',
            url: '/dashboard',
        },
        {  
            badge: { variant: 'info', text: 'NEW' },
            icon: 'icon-star',
            name: 'Favorites',
            url: '/favorites',
        },
        {  
            badge: { variant: 'info', text: 'NEW' },
            icon: 'icon-star',
            name: 'Quote To Cash',
            url: '/q2c',
        },
        {  
            badge: { variant: 'info', text: 'NEW' },
            icon: 'icon-star',
            name: 'Procure to Pay',
            url: '/p2p',
        },
        {  
            badge: { variant: 'info', text: 'NEW' },
            icon: 'icon-star',
            name: 'Logistics/Transportation',
            url: '/logistics',
        },
        {  
            badge: { variant: 'info', text: 'NEW' },
            icon: 'icon-star',
            name: 'Automotive Planning/MES',
            url: '/automotiveplanning',
        },
        {  
            badge: { variant: 'info', text: 'NEW' },
            icon: 'icon-star',
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