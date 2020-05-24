const initialState = {
    basket: {
        arrOfProducts: [],
        totalSum: 0
    }
};

const basket = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TOTAL_SUM': {
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
            break
        }
        case 'INCREMENT_FOR_AMOUNT': {
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
            break
        }
        case 'DECREMENT_FOR_AMOUNT': {
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
            break
        }
        case 'ADD_TO_BASKET': {
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
            break
        }
        case 'DELETE_FROM_BASKET': {
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
            break
        }
        default:
            return state;
            break

    }
};
export default basket;