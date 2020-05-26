import {createReducer} from '../../Helpers/creatReducer';
import CountingHelper from './../../Helpers/countingHelper';
import {
    GET_TOTAL_SUM,
    DELETE_FROM_BASKET,
    INCREMENT_FOR_AMOUNT,
    DECREMENT_FOR_AMOUNT,
    ADD_TO_BASKET
} from './../Actions/actionsForBasket'

const initialState = {
    basket: {
        arrOfProducts: [],
        totalSum: 0
    }
};

const basketRedusers = {

    [GET_TOTAL_SUM]: (state = initialState, action) => {

        const countingHelper = new CountingHelper(state);

        return {
            ...state,
            basket: countingHelper.getTotalSum()
        };
    },

    [INCREMENT_FOR_AMOUNT]: (state = initialState, action) => {

        const countingHelper = new CountingHelper(state);
        const {product} = action.product;

        return {
            ...state,
            basket: countingHelper.increment(product.id)
        };
    },

    [DECREMENT_FOR_AMOUNT]: (state = initialState, action) => {

        const countingHelper = new CountingHelper(state);
        const {product} = action.product;

        return {
            ...state,
            basket: countingHelper.decrement(product.id)
        };
    },

    [ADD_TO_BASKET]: (state = initialState, action) => {

        const countingHelper = new CountingHelper(state);
        const product = action.product;

        return {
            ...state,
           basket: countingHelper.addToBasket(product)
        };
    },

    [DELETE_FROM_BASKET]: (state = initialState, action) => {

        const countingHelper = new CountingHelper(state);
        const {product} = action.product;

        return {
            ...state,
            basket: countingHelper.deleteFromBasket(product.id)
        };
    }

};
const basket = createReducer(initialState, basketRedusers);
export default basket;
