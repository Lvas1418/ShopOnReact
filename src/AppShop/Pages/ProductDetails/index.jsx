import {connect} from 'react-redux';
import ProductDetailsComponent from './productDeails.jsx';

const mapToProps = (store) => {
    return {
        data: store.selectedProduct.selected,
        isAuthorized: store.auth.authState.isAuthorized
    }
};

const ProductDetails = connect(mapToProps)(ProductDetailsComponent);
export default ProductDetails;
