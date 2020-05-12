const initialState = {
    authState: {
        showAuth: false,
        message: "",
    }
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_AUTH': {
            return {
                ...state,
                alertState:{showAlert: true, message: action.reason}
            };
            break
        }
        case 'HIDE_AUTH': {
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
export default auth;