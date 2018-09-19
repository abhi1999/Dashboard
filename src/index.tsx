import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import configureStore from "./store/configureStore";

import "@babel/polyfill";


import './index.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
