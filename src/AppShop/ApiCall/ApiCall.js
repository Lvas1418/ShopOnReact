import axios from "axios";

const apiCall = ({
                     url = 'https://shop-94362.firebaseio.com',
                     method = 'GET',
                     body = {},
                     endpoint = '/products.json',
                     types,
                     headers = {}
                 }) => {
    const methodUpgated = method.toLowerCase();
    const instanceOfAxios = axios.create({
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

export default apiCall;