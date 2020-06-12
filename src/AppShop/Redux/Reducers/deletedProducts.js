import {ADD_TO_DELETED} from '../Actions/deletedProducts';
import {createReducer} from '../../Helpers/creatReducer';

const initialState = {
    deletedProducts: {
       list: []

    }
};

const addToDeleted= {
    [ADD_TO_DELETED]: (state = initialState, action) => {
        const arr=state.deletedProducts.list;
        return {
            ...state,
            deletedProducts: {list: [...arr, action.id]}
        }
    }
}
const deleted = createReducer(initialState, addToDeleted);
export default deleted;
