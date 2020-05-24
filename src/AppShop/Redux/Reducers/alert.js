const initialState = {
    alertState: {
        showAlert: false,
        message: "",
    }
};

const alert = (state = initialState, action) => {
    switch (action.type) {

        case 'SHOW_ALERT': {
            return {
                ...state,
                alertState:{showAlert: true, message: action.reason}
            };
            break
        }
        case 'HIDE_ALERT': {
            return {
                ...state,
                alertState:{showAlert: false, message: action.reason}
            };
            break
        }
        default:
            return state;
            break

    }
};
export default alert;