import {createStore, applyMiddleware, compose } from "redux";
import reducer from "./Reducers";
import ApiMiddleware from './Middleware/api';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import deletedProdactsMiddleware from "./Middleware/deletedProducts";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["auth", "basket"]
}

const persistedReducer = persistReducer(persistConfig, reducer)

export  const create = ()=>{
  const store=createStore(persistedReducer, compose(applyMiddleware(ApiMiddleware,deletedProdactsMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    ));
    let persistor = persistStore(store)
    return { store, persistor }
}

