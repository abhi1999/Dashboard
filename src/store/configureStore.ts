import * as React from "react";
import  { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import promise from "redux-promise-middleware";
import ReduxThunk from "redux-thunk";
import reducers from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "../reducers";

const sagaMiddleware:any = createSagaMiddleware();
declare var require:any;
declare let process:any;
declare let module:any;

const configureStore =(preloadedState?:any)=>{
    const middleware:any[] = [promise(), ReduxThunk, sagaMiddleware];
    if(process.env.NODE_ENV !== 'production') {
        // middleware.push(createLogger());
    }
    const store = createStore(
        rootReducer, 
        preloadedState,
        composeWithDevTools(applyMiddleware(...middleware))
     )

    sagaMiddleware.run(rootSaga);
    if(module.hot){
        module.hot.accept("../reducers", ()=>{
            const nextRootReducer = require("../reducers");
            store.replaceReducer(nextRootReducer);
        })
    }
    return store;
}

export default configureStore;