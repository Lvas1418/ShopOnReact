const initialState = {
    authState: {
        showAuth: false
    }
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_AUTH': {
            return {
                ...state,
                authState:{showAuth: true}
            };
            break
        }
        case 'HIDE_AUTH': {
            return {
                ...state,
                authState:{showAuth: false}
            };
            break
        }
        default:
            return state;
            break

    }
};
export default auth;