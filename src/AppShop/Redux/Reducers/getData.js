
const getData = (state=[], action) => {
    switch (action) {
        case 'GET_DATA_FROM_SERVER': {
            return  {
                ...state,
            };
            break
        }
        default:
            return state;
            break
    }
};
export default getData;
