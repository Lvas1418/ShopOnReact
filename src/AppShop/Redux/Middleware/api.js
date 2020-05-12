import {actionHidePreloader} from './../../Redux/Actions/actionsForPreloader';
import {showAlert} from './../../Redux/Actions/alert.js';
import axios from 'axios';
  import {merge} from 'lodash';


  const nextAction=(action,data)=>{
  const next=merge({},action,data);
  delete next['API_REQUEST'];
  return next;
  }

  const apiCall = ({
                       url = 'https://shop-94362.firebaseio.com',
                       method = 'GET',
                       body = {},
                       endpoint = '/products.json',
                       types,
                       headers = {}
                   }) => {
      const methodUpgated = method.toLowerCase();
      const instanceOfAxios=axios.create({
        baseURL: url,
        responseType: "json",
        headers
      });

      return new Promise((resolve, reject) => {
          instanceOfAxios[methodUpgated](endpoint, body)
              .then(response => resolve(response))
              .catch(err => reject(err))
      })
  };

  const ApiMiddleware = state => next => action =>{

  if (action.type==='API_REQUEST') {
  let url, method, body, endpoint, headers;
         (action.apidata) && ({url, method, body, endpoint, headers} = action.apidata)
               const onSuccese = (response) => {
           let arr = {
           type:action.action.type,
           data:response.data
           };
setTimeout(()=>{
next(arr);
  action.dispatch(actionHidePreloader);
},2000);

               };
               const onError = (error) => {
               let status=(error.response) ? error.response.status : null;
           if (status) {
                  status<400 && action.dispatch(showAlert("Redirection"));
                  status>=400 && status<500 && action.dispatch(showAlert("Error is on your side"));
                  status>=500 && status<600 && action.dispatch(showAlert("Server side error"))

           } else {
                  action.dispatch(showAlert("It must be a network error"));
           }
               };
            apiCall({url, method, body, endpoint, headers})
           .then(onSuccese, onError)
           .catch(onErr=>console.log("catchOnErr===",onErr, "axios.defaults.baseURL===",axios.defaults.baseURL))
  } else{
           next(action);
  }
 }

 export default ApiMiddleware;