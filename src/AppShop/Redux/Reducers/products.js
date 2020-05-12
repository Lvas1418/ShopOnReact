const emptyState = {
    data: [],
    basket: {arrOfProducts: [], totalSum: 0}
};

const products = (state = emptyState, action) => {
    switch (action.type) {
        case 'DATA_FROM_SERVER': {
            return {
                ...state,
                data: [...state.data, ...action.data]
            };
            break
        }
        default:
            return state;
            break

    }
};
export default products;