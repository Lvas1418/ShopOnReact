const initialState = {showPreloader: true};

const stateOfPreloader = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_PRELOADER': {
            return {
                ...state,
                showPreloader: true
            };
            break
        }
        case 'HIDE_PRELOADER': {
            return {
                ...state,
                showPreloader: false
            };
            break
        }
        default:
            return state;
            break
    }
};
export default stateOfPreloader;