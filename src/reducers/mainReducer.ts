import { LOAD_DATA, LOAD_ERROR } from './../constants';

const initialState = {
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
        case LOAD_DATA:
            return {
                ...state,
                loading:true
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