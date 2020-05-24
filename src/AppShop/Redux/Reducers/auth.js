const initialState = {
    authState: {
        showAuth: false,
        isAuthorized: false,
        token:''
    }
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_AUTH': {
            return {
                ...state,
                authState:{showAuth: true, isAuthorized: state.authState.isAuthorized, token: state.authState.token}
            };
            break
        }
        case 'HIDE_AUTH': {
            return {
                ...state,
                authState:{showAuth: false, isAuthorized: state.authState.isAuthorized, token: state.authState.token}
            };
            break
        }
        case 'SIGN_IN': {
            return {
                ...state,
                authState:{showAuth: false, isAuthorized: true, token: action.token}
            };
            break
        } case 'SIGN_OUT': {
            return {
                ...state,
                authState:{showAuth: false, isAuthorized: false, token: ''}
            };
            break
        }
        default:
            return state;
            break

    }
};
export default auth;