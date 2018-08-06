import * as React from "react";
import  { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import promise from "redux-promise-middleware";
import ReduxThunk from "redux-thunk";
// import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from "../reducers";

declare var require:any;
declare let process: any;
declare let module: any;

const configureStore =(preloadedState?:any)=>{
    const middleware = [promise(), ReduxThunk];
    if(process.env.NODE_ENV !== 'production') {
        middleware.push(createLogger());
    }
    const store = createStore(
        rootReducer, 
        preloadedState,
        compose(applyMiddleware(...middleware))
    )
    if(module.hot){
        module.hot.accept("../reducers", ()=>{
            const nextRootReducer = require("../reducers");
            store.replaceReducer(nextRootReducer);
        })
    }
    return store;
}

export default configureStore;