export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const DELETE_FROM_BASKET = 'DELETE_FROM_BASKET';
export const INCREMENT_FOR_AMOUNT = 'INCREMENT_FOR_AMOUNT';
export const DECREMENT_FOR_AMOUNT = 'DECREMENT_FOR_AMOUNT';
export const GET_TOTAL_SUM = 'GET_TOTAL_SUM';

export const actionAddProdukt = (product) => ({
    type: ADD_TO_BASKET,
    product
});
export const actionDeleteProdukt = (product) => ({
    type: DELETE_FROM_BASKET,
    product,
});
export const increment = (product) => ({
    type: INCREMENT_FOR_AMOUNT,
    product
});
export const decrement = (product) => ({
    type: DECREMENT_FOR_AMOUNT,
    product,

});
export const getTotalSum = ()=>({
    type: GET_TOTAL_SUM
});
