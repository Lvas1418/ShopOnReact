import React from 'react';
import {Col, Row} from "antd";
import styles from "./productList.module.css";
import CardBlock from './Blocks/index';
import basketUrl from './basket.png';

const renderCards = function (el, i, actionAddProdukt, isAuthorized) {

    const addToBasket = () => {
        actionAddProdukt(el);
    };

    return <Col xs={20} sm={10} md={8} lg={6} xl={6} className={styles.col}  key={i}>
        <CardBlock dataItem={el}/>
        <div
            key={i+1}
            className={styles.priceBlock}>
            <p className={styles.pPrice}><b>Price: ${el.price}</b></p>
            <img alt="example" id={"imgBasket" + el.id} src={basketUrl} onClick={addToBasket}
                 className={isAuthorized ? styles.basketImg : styles.none}/>
        </div>
    </Col>
};

const ProductListComponent = (props) => {
    let {data: arrOfProducts, isAuthorized, actionAddProdukt} = props;
    return (
        <Row gutter={20} type="flex" justify="start">
            {arrOfProducts.map((el, i) => renderCards(el, i, actionAddProdukt, isAuthorized))}
        </Row>
    );
};
 export default ProductListComponent;
