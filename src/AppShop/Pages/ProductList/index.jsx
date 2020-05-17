import React from 'react';
import CardBlock from './Blocks/card';
import basketUrl from './basket.png';
import {actionAddProdukt} from '../../Redux/Actions/actionsForBasket';
import styles from './productList.module.css';
import {Row, Col} from 'antd';

const flashEffect = (e) => {
    const element = document.getElementById(e.nativeEvent.target.id);
    element.classList.toggle(styles.basketImgOnClick);
    setTimeout(() => {
        element.classList.toggle(styles.basketImgOnClick)
    }, 800);
};

const renderCards = function (el, i, dispatch, isAuthorized) {

    const addToBasket = (event) => {
        dispatch(actionAddProdukt(el));
        flashEffect(event);
    };

    return <Col xs={20} sm={10} md={8} lg={6} xl={6} style={{marginTop: "30px"}}  key={i}>
        <CardBlock dataItem={el}/>
        <div
            key={i+1}
            style={{
                marginTop: 10, display: "flex", justifyContent: "space-around",
                alignItems: "center",
                color: "black", background: "white", width: 240, borderShadow: 2,
                padding: 10
            }}>
            <p style={{margin: "0 0 0 0"}}><b>Price: ${el.price}</b></p>
            <img alt="example" id={"imgBasket" + el.id} src={basketUrl} onClick={addToBasket}
                 className={isAuthorized ? styles.basketImg : styles.none}/>
        </div>
    </Col>
};

const ProductList = (props) => {
    let {data: dataFromProps, isAuthorized, dispatch} = props.data;
    return (
        <Row gutter={20} type="flex" justify="start">
            {dataFromProps.map((el, i) => renderCards(el, i, dispatch, isAuthorized))}
        </Row>
    );
};

export default ProductList;
