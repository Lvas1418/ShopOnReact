import React from 'react';
import {actionAddProdukt} from '../../Redux/Actions/actionsForBasket';
import styles from './productDetails.module.css'

const ProductDetailsComponent = (props) => {
    const {data, dispatch,isAuthorized} = props;
    const addToBasket = () => dispatch(actionAddProdukt(data));

    return (
        <section style={{display: "flex", justifyContent: "center"}}>
            <div className={styles.containerForImg}>
                <img alt={data.name} src={data.url} className={styles.imgOfProduct}/>
            </div>
            <div className={styles.rightSide}>
                <article className={styles.article}>
                    <h1 style={{textAlign: "center"}}>
                        {data.name}
                    </h1>
                    <p className={styles.description}>
                        {data.description}
                        {data.description}
                        {data.description}
                        {data.description}
                        {data.description}
                        {data.description}
                        {data.description}
                    </p>
                    <button onClick={addToBasket} className={isAuthorized ? styles.addToBasketBTN : styles.none}>
                        Add to basket
                    </button>
                </article>
            </div>
        </section>);
};

export default ProductDetailsComponent;
