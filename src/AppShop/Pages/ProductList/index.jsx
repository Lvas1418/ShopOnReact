import React from 'react';
import {actionAddProdukt} from '../../Redux/Actions/actionsForBasket';
import {connect} from "react-redux";
import ProductListComponent from './ProductListComponent'

const mapDispatchToProps = {
    actionAddProdukt
}

const mapToProps = (store) => {
    return {
        data: store.products.data,
        isAuthorized: store.auth.authState.isAuthorized
    }
};

const ProductList=connect(mapToProps,mapDispatchToProps)(ProductListComponent);

export default ProductList;
