import { LOAD_DATA, LOAD_ERROR, LOAD_NEWS_FEED_SUCCESS } from './../constants';
const initialState = {
    error:false,
    loading:false, 
    newsFeeds:{},
}
export const newsFeedReducer = (state = initialState, action)=>{
    if(!action){
        return state;
    }        
    switch(action.type){
        case LOAD_DATA:
            if(action.newFeeds){
                return {
                    ...state,
                    loading:true
                }
            }
            else {
                return state;
            }
        case LOAD_NEWS_FEED_SUCCESS:
            return {
                ...state,
                newsFeeds:action.data,
            }
        case LOAD_ERROR:
            if(action.newFeeds){
                return {
                    ...state,
                    error:true, loading:false, 
                }    
            }
            else {
                return state
            };
        default:
            return state;
    }
}

export default newsFeedReducer;