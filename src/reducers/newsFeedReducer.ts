import { DATA_LOAD_ERROR, DATA_LOAD_START, LOAD_NEWS_FEED_SUCCESS } from './../constants';
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
        case DATA_LOAD_START:
            if(action[LOAD_NEWS_FEED_SUCCESS]){
                return {
                    ...state,
                    error:false,
                    loading:true,
                }
            }
            else {
                return state;
            }
        case LOAD_NEWS_FEED_SUCCESS:
            return {
                ...state,
                error:false, loading:false, newsFeeds:action.data,
            }
        case DATA_LOAD_ERROR:
            if(action[LOAD_NEWS_FEED_SUCCESS]){
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