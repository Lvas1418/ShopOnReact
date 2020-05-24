const initialState = {
    selected: {},
};
const selectedProduct = (state=initialState, action) =>
    (action.type==='SELECT_PRODUCT') ? { ...state, selected: action.product} : state;

export default selectedProduct;