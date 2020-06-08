import {DELETE_FROM_BASKET} from '../Actions/actionsForBasket';
import {addToDeleted} from '../Actions/deletedProducts';
const deletedProdactsMiddleware = state => next => action => {

    (action.type === DELETE_FROM_BASKET) && state.dispatch(addToDeleted(action.product.product.id));
    next(action);

}

export default deletedProdactsMiddleware;
