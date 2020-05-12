
const getData = (state=[], action) => {
    switch (action) {
        case 'GET_DATA_FROM_SERVER': {
            return  {
                ...state,
            };
            break
        }
        case 'GSERVER': {
            return {

            };
            break
        }
        default:
            return state;
            break

    }
};
export default getData;