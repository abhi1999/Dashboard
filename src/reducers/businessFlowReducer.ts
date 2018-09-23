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
        {   name: 'Configuration',
            url: '/config',
            icon: 'fa fa-gear',
            children: [
            {  
                icon: 'fa fa-list',
                name: 'Carriers',
                url: '/carriers',
            },
            {
                icon: 'fa fa-list',
                name: 'Error Codes',
                url: '/errorCodes',
            },
            {  
                icon: 'fa fa-list',
                name: 'Freight Codes',
                url: '/freightCodes',
            },
            {  
                icon: 'fa fa-list',
                name: 'Trading Partners',
                url: '/trades',
            },
            {
                icon: 'fa fa-list',
                name: 'Networks',
                url: '/vpNetworks',
            },
            {
                icon: 'fa fa-list',
                name: 'Notification History',
                url: '/notifications',
            },
            {  
                icon: 'fa fa-list',
                name: 'Ship To Locations',
                url: '/shipTos',
            },
            {  
                icon: 'fa fa-list',
                name: 'Document Explorer',
                url: '/documents',
            },
            {
                icon: 'fa fa-list',
                name: 'Company Settings',
                url: '/companysettings'
            },
            {
                icon: 'fa fa-list',
                name: 'Items',
                url: '/items'
            },
            // {
            //     icon: 'fa fa-list',
            //     name: 'Locations',
            //     url: '/locations'
            // }
        ]
        },
        {
            name: 'Scheduler',
            url: '/scheduler',
            icon: 'fa fa-clock-o',
            children: [{  
                icon: 'fa fa-tasks',
                name: 'Status',
                url: '/status',
            },
            {  
                icon: 'fa fa-list',
                name: 'Workflows',
                url: '/workflows',
            },
            {  
                icon: 'fa fa-sticky-note-o',
                name: 'Tasks',
                url: '/tasks',
            },
            {  
                icon: 'fa fa-clock-o',
                name: 'Schedulers',
                url: '/schedulers',
            },
            {  
                icon: 'fa fa-arrows-alt',
                name: 'Networks',
                url: '/networks',
            },
            {  
                icon: 'fa fa-database',
                name: 'Databases',
                url: '/databases',
            },
            {  
                icon: 'fa fa-folder-open-o',
                name: 'Folders',
                url: '/folders',
            },
            {  
                icon: 'fa fa-subscript',
                name: 'Variables',
                url: '/variables',
            }]
        },
    ],
}

export const businessFlowReducer = (state = initialState, action)=>{
    if(!action){
        return state;
    }
        
    switch(action.type){
        case DATA_LOAD_START:
            if(action[LOAD_DASHBOARD_MENU_ITEM_DETAILS] || action[LOAD_DASHBOARD_MENU_LIST]){
                return {
                    ...state,
                    error:false,
                    loading:true
                }
            }
            else {
                return state;
            }
        case DATA_LOAD_ERROR:
            if(action[LOAD_DASHBOARD_MENU_ITEM_DETAILS] || action[LOAD_DASHBOARD_MENU_LIST]){
                return {
                        ...state,
                    error:true, loading:false, 
                }    
            }
            else {
                return state
            };
        case LOAD_DASHBOARD_MENU_LIST:
            {
                const newState = _.cloneDeep(state);
                action.data.forEach(element => {
                    if(newState.navItems.find((i)=>i.ShortCutID === element.ShortCutID ) === undefined){
                        newState.navItems.push({icon: getIcon(element.Caption), ShortCutID:element.ShortCutID, name:titleCase(element.Caption), url:"/businessProcess/"+ element.ShortCutID, class:'business-process-flow-item'   })
                    }
                });
                return {...newState, dashboardMenuItems:action.data, loading:false};
            }
        case LOAD_DASHBOARD_MENU_ITEM_DETAILS:
            {const newState = _.cloneDeep(state);
                const item = newState.dashboardMenuItemDetails.find(d=> d.ShortCutID === action.ShortCutID);
                if(item){
                    item.values = action.data
                }
                else {
                    newState.dashboardMenuItemDetails.push({ShortCutID:action.ShortCutID, values:action.data})
                }
                return {...newState, loading:false};
            }
        default:
            return state;
    }
}
const getIcon=(type)=>{
    console.log(type);
    if(type && type.toLowerCase().indexOf('favorite') > -1){
        return "fa fa-star";
    }else if (type && type.toLowerCase().indexOf('quote')> -1) {
        return "fa fa-dollar";
    }else if (type && type.toLowerCase().indexOf('procure')> -1) {
        return "fa fa-credit-card";
    }else if (type && type.toLowerCase().indexOf('logistics')> -1) {
        return "fa fa-rocket";
    }else if (type && type.toLowerCase().indexOf('automotive planning')> -1) {
        return "fa fa-car";
    }else if (type && type.toLowerCase().indexOf('product management')> -1) {
        return "fa fa-institution";
    }else if (type && type.toLowerCase().indexOf('relationship management')> -1) {
        return "fa fa-handshake-o";
    }
    
    return "fa fa-info-circle";
}

const titleCase =(str)=> {
    const splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
 }
 
export default businessFlowReducer;