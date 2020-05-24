
export const actionAddProdukt = (product) => ({
    type: 'ADD_TO_BASKET',
    product
});
export const actionDeleteProdukt = (product) => ({
    type: 'DELETE_FROM_BASKET',
    product,
});
export const increment = (product) => ({
    type: 'INCREMENT_FOR_AMOUNT',
    product
});
export const decrement = (product) => ({
    type: 'DECREMENT_FOR_AMOUNT',
    product,

});
export const getTotalSum = {
    type: 'GET_TOTAL_SUM'
};