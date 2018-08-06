import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import AppContainer from './containers/AppContainer';
<<<<<<< HEAD
 import registerServiceWorker from './registerServiceWorker';
=======
// import registerServiceWorker from './registerServiceWorker';
>>>>>>> 38045a84843171c0e74fb30298d0ce2b412a791e
import configureStore from "./store/configureStore";

import './index.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
  document.getElementById('root') as HTMLElement
);
<<<<<<< HEAD
registerServiceWorker();
=======
// registerServiceWorker();
>>>>>>> 38045a84843171c0e74fb30298d0ce2b412a791e
