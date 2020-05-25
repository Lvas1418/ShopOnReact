import {HIDE_ALERT, SHOW_ALERT} from '../Actions/alert';
import {createReducer} from '../../Helpers/creatReducer';

const initialState = {
    alertState: {
        showAlert: false,
        message: "",
    }
};

const alertRedusers = {
    [SHOW_ALERT]: (state = initialState, action) => {
        return {
            ...state,
            alertState: {showAlert: true, message: action.reason}
        }
    },
    [HIDE_ALERT]: (state = initialState, action) => {
        return {
            ...state,
            alertState: {showAlert: false, message: action.reason}
        };
    }
};

const alert = createReducer(initialState, alertRedusers);
export default alert;
