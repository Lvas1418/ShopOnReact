import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import {create} from 'AppShop/Redux';
import App from 'AppShop/index';
import * as serviceWorker from 'serviceWorker.js';

import 'index.css';
import 'antd/dist/antd.css'

const combinedStore=create();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={combinedStore.store}>
            <PersistGate persistor={combinedStore.persistor} >
                <App/>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
