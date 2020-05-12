import React, {useState} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import styles from './headerCss.module.css';

const HeaderMenu = (store) => {
    const {lengthArrOfProducts} = store;
    const [menuHome, selectHome] = useState(false);
    const [menuDelivery, selectDelivery] = useState(false);
    const [menuAbout, selectAbout] = useState(false);
    const [menuBasket, selectBasket] = useState(false);

    const selectMenu = (event) => {
        selectHome(false);
        selectDelivery(false);
        selectAbout(false);
        selectBasket(false);

        switch (event.nativeEvent.target.id) {
            case 'HOME':
                selectHome(true);
                break;
            case 'DELIVERY':
                selectDelivery(true);
                break;
            case 'ABOUT':
                selectAbout(true);
                break;
            case 'BASKET':
                selectBasket(true);
                break;
        }
    };
    return (
        <nav className={styles.nav}>
            <Link onClick={selectMenu} id={"HOME"} key={"1"} to="/"
                  className={(menuHome) ? styles.active : styles.inactive}>
                HOME
            </Link>
            <Link onClick={selectMenu} id={"DELIVERY"} key={"2"} to="/productDelivery"
                  className={(menuDelivery) ? styles.active : styles.inactive}>
                DELIVERY
            </Link>
            <Link onClick={selectMenu} id={"ABOUT"} key={"3"} to="/about"
                  className={(menuAbout) ? styles.active : styles.inactive}>
                ABOUT US
            </Link>
            <Link onClick={selectMenu} id={"BASKET"} key={"4"} to="/basket"
                  className={(menuBasket) ? styles.active : styles.inactive}
                  style={{marginLeft: "100px", visibility: (lengthArrOfProducts) ? "visible" : "hidden"}}>
                BASKET
            </Link>
        </nav>
    )
};
const mapToProps = (store) => {
    return {lengthArrOfProducts: store.basket.basket.arrOfProducts.length}
};
export default connect(mapToProps)(HeaderMenu);
