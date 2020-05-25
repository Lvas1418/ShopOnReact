import React, {useEffect} from "react";
import styles from "./basket.module.css";

const rowOfTable = (item,i, increment, decrement, actionDeleteProdukt) => {
    const incrementAmount = () => increment(item);
    const decrementAmount = () => decrement(item);
    const deleteProdukt = () => actionDeleteProdukt(item);

    return (
        <tr  key={i} className={(item.sum) ? styles.active : styles.inactive}>
            <td><img alt="example" src={item.product.url} className={styles.imgIcon}/></td>
            <td>{item.product.name}</td>
            <td>{item.product.price}</td>
            <td>
                <div className={styles.amountContainer}>
                    <button onClick={decrementAmount} className={styles.blackColor}>-</button>
                    <div className={styles.amountOfProduct}>{item.amount}</div>
                    <button onClick={incrementAmount} className={styles.blackColor}>&#43;</button>
                </div>
            </td>
            <td>{item.sum}</td>
            <td>
                <button onClick={deleteProdukt} className={styles.blackColor}>&#215;</button>
            </td>
        </tr>
    );
};

const BasketComponent = (props) => {
    const {data,
        increment,
        decrement,
        getTotalSum,
        actionDeleteProdukt} = props;
    useEffect(() => {
        getTotalSum();
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
                    {data.arrOfProducts.map((item,i,) =>
                        rowOfTable(
                            item,
                            i,
                            increment,
                            decrement,
                            actionDeleteProdukt
                        )
                    )}
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

export default BasketComponent;
