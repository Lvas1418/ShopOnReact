import {showAlert} from '../Actions/alert';
import axios from 'axios';
import apiCall from './../../ApiCall/ApiCall';

const ApiMiddleware = state => next => action => {

    const actionHidePreloader=action.dispatch;

    if (action.type === 'API_REQUEST') {

        let url, method, body, endpoint, headers;
        (action.apidata) && ({url, method, body, endpoint, headers} = action.apidata)

        const onSuccese = (response) => {
            let arr = {
                type: action.action.type,
                data: response.data
            };
            setTimeout(() => {
                next(arr);
                actionHidePreloader();
            }, 2000);
        };

        const onError = (error) => {

            let status = (error.response) ? error.response.status : null;

            if (status) {
                status < 400 && action.dispatch(showAlert("Redirection"));
                status >= 400 && status < 500 && action.dispatch(showAlert("Error is on your side"));
                status >= 500 && status < 600 && action.dispatch(showAlert("Server side error"))
            } else {
                action.dispatch(showAlert("It must be a network error"));
            }
        };

        apiCall({url, method, body, endpoint, headers})
            .then(onSuccese, onError)
            .catch(onErr => console.log("catchOnErr===", onErr, "axios.defaults.baseURL===", axios.defaults.baseURL))
    } else {
        next(action);
    }
}

export default ApiMiddleware;
