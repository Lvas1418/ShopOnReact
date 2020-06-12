import {combineReducers} from 'redux';
import products from './products';
import getData from './getData';
import stateOfPreloader from './preloader';
import selectedProduct from './selectProduct';
import basket from './basket';
import alert from './alert';
import auth from './auth';
import deleted from './deletedProducts';

const appRedux= combineReducers({
    products,
    getData,
    stateOfPreloader,
    selectedProduct,
    basket,
    alert,
    auth,
    deleted
});

const reducer =(state,action)=> {
    return appRedux(state,action);
};

export default reducer;
