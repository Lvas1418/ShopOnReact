import {connect} from 'react-redux';
import {actionDeleteProdukt, decrement, getTotalSum, increment} from '../../Redux/Actions/actionsForBasket';
import BasketComponent from './basket';

const mapDispatchToProps = {
    increment,
    decrement,
    getTotalSum,
    actionDeleteProdukt
}

const mapToProps = (store) => {
    return {data: store.basket.basket}
};

const Basket =  connect(mapToProps,mapDispatchToProps)(BasketComponent);

export default Basket;
