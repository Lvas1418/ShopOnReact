import  {apiRequest} from './api.js';
export const actionGetData =(apiData, dispatch)=>apiRequest(apiData,dispatch, {
    type: 'DATA_FROM_SERVER',
    data: []
});