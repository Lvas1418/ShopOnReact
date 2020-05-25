import {createReducer} from '../../Helpers/creatReducer';
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

const basketRedusers =  {
         [GET_TOTAL_SUM]: (state = initialState, action) =>{
            return {
                ...state,
                basket: (() => {
                    let sum = 0;
                    if (state.basket.arrOfProducts.length) {
                        sum = state.basket.arrOfProducts.reduce((sum, item) => {
                            return sum + item.sum;
                        }, 0);
                    }
                    return {arrOfProducts: [...state.basket.arrOfProducts], totalSum: sum}
                })()
            };
        },
        [INCREMENT_FOR_AMOUNT]: (state = initialState, action) =>{
            return {
                ...state,
                basket: (() => {
                    if (state.basket.arrOfProducts.length) {
                        const {product} = action.product;
                        state.basket.arrOfProducts.forEach((item) => {
                            if (item.product.id === product.id) {
                                item.amount++;
                                item.sum = +(item.product.price * item.amount).toFixed(2);
                                state.basket.totalSum = +(+state.basket.totalSum + +item.product.price).toFixed(2);
                            }
                        });
                    }
                    return {arrOfProducts: [...state.basket.arrOfProducts], totalSum: state.basket.totalSum}
                })()
            };
        },
        [DECREMENT_FOR_AMOUNT]: (state = initialState, action) =>{
            return {
                ...state,
                basket: (() => {
                    const {product} = action.product;
                    state.basket.arrOfProducts.forEach((item) => {
                        if (item.product.id === product.id) {
                            state.basket.totalSum = (item.amount) ? +(state.basket.totalSum - item.product.price).toFixed(2) : +state.basket.totalSum;
                            item.amount = (item.amount) ? item.amount - 1 : 0;
                            item.sum = +(item.product.price * item.amount).toFixed(2);
                        }
                    });
                    return {arrOfProducts: [...state.basket.arrOfProducts], totalSum: state.basket.totalSum}
                })()
            };
        },
        [ADD_TO_BASKET]:(state = initialState, action) => {
            return {
                ...state,
                basket: (() => {
                    if (state.basket.arrOfProducts.length) {
                        const product = action.product;
                        let productFound = false;
                        state.basket.arrOfProducts.forEach((item) => {
                            if (item.product.id === product.id) {
                                item.amount = item.amount + 1;
                                item.sum = +(item.product.price * item.amount).toFixed(2);
                                state.basket.totalSum = +(+state.basket.totalSum + +item.product.price).toFixed(2);
                                productFound = true;
                            }
                        });
                        if (!productFound) {
                            state.basket.arrOfProducts.push({
                                product: action.product,
                                amount: 1,
                                sum: +action.product.price
                            });
                        }
                    } else {
                        state.basket.arrOfProducts.push({
                            product: action.product,
                            amount: 1,
                            sum: +action.product.price,
                        });
                    }
                    return {arrOfProducts: [...state.basket.arrOfProducts], totalSum: +state.basket.totalSum}
                })()
            };
        },
        [DELETE_FROM_BASKET]: (state = initialState, action) =>{
            return {
                ...state,
                basket: (() => {
                    const product = action.product;
                    let position;
                    state.basket.arrOfProducts.some((item, i) => {
                        if (item.product.id === product.product.id) {
                            state.basket.totalSum = +(+state.basket.totalSum + -item.sum).toFixed(2);
                            position = i;
                            return true;
                        }
                    });
                    state.basket.arrOfProducts.splice(position, 1);

                    return {arrOfProducts: [...state.basket.arrOfProducts], totalSum: +state.basket.totalSum}
                })()
            };
        }

};
const basket = createReducer(initialState, basketRedusers);
export default basket;
