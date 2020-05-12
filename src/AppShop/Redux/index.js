import {createStore, applyMiddleware, compose } from "redux";
import reducer from "./Reducers";
import ApiMiddleware from './Middleware/api';

export  const create = createStore(reducer, compose(applyMiddleware(ApiMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
));

