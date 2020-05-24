import React, {useEffect} from "react";
import {connect} from "react-redux";
import styles from "./basket.module.css";
import {increment, decrement, getTotalSum, actionDeleteProdukt} from '../../Redux/Actions/actionsForBasket'; //'src/AppShop/Redux/Actions/actionsForBasket';

const rowOfTable = (item,i, dispatch) => {
    const incrementAmount = () => dispatch(increment(item));
    const decrementAmount = () => dispatch(decrement(item));
    const deleteProdukt = () => dispatch(actionDeleteProdukt(item));

    return (
        <tr  key={i} className={(item.sum) ? styles.active : styles.inactive}>
            <td><img alt="example" src={item.product.url} className={styles.imgIcon}/></td>
            <td>{item.product.name}</td>
            <td>{item.product.price}</td>
            <td>
                <div className={styles.amountContainer}>
                    <button onClick={decrementAmount} style={{color: "black"}}>-</button>
                    <div style={{width: "20%"}}>{item.amount}</div>
                    <button onClick={incrementAmount} style={{color: "black"}}>&#43;</button>
                </div>
            </td>
            <td>{item.sum}</td>
            <td>
                <button onClick={deleteProdukt} style={{color: "black"}}>&#215;</button>
            </td>
        </tr>
    );
};

const Basket = (props) => {
    const {data, dispatch} = props;
    useEffect(() => {
        dispatch(getTotalSum);
    }, []);
    if (data.arrOfProducts.length) {
        return (
            <section className={styles.container}>
                <table>
                    <thead>
                    <tr align={"center"}>
                        <th></th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Sum</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tfoot>
                    <tr className={styles.active}>
                        <td colSpan={3}></td>
                        <td></td>
                        <td>{data.totalSum}</td>
                        <td></td>
                    </tr>
                    </tfoot>
                    <tbody>
                    {data.arrOfProducts.map((item,i,) => rowOfTable(item,i, dispatch))}
                    </tbody>
                </table>
            </section>)
    } else {

        setTimeout(() => {
            const element=document.getElementById("tableEmptyBasket");
            element.style.display="table";
        }, 1000);
        return (
            <section  className={styles.container}>
                <table className={styles.emptyBasket} id={"tableEmptyBasket"}>
                    <thead>
                    <tr align={"center"}>
                        <th>
                        </th>
                    </tr>
                    </thead>
                    <tfoot>
                    <tr className={styles.active}>
                        <td>
                        </td>
                    </tr>
                    </tfoot>
                    <tbody>
                    <tr className={styles.active}>
                        <td className={styles.emptyRow}>
                        </td>
                    </tr>
                    <tr className={styles.active}>
                        <td>
                            Basket is empty
                        </td>
                    </tr>
                    <tr className={styles.active}>
                        <td className={styles.emptyRow}>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </section>
        );
    }
};

const mapToProps = (store) => {
    return {data: store.basket.basket}
};


export default connect(mapToProps)(Basket);