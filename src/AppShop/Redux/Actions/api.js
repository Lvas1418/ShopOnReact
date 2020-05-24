export const API_REQUEST='API_REQUEST';
export const apiRequest=(apiData, dispatch, action)=>({
type:API_REQUEST,
apiData,
dispatch,
action
})