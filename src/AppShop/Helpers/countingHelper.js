class CountingHelper {

    constructor(state, id) {
        this.arrOfProducts = [...state.basket.arrOfProducts];
        this.totalSum = state.basket.totalSum;
    }

    searchProduct(id) {
        let result = -1;
        this.arrOfProducts.forEach((item, i) => {
            (item.product.id === id) && (result = i);
        });
        return result;
    }

    changeAndCount(id, flag) {

        const resultOfSearch = this.searchProduct(id);
        let totalSum = this.totalSum;
        let arrOfProducts = this.arrOfProducts;

        if (resultOfSearch >= 0) {

            let amount = arrOfProducts[resultOfSearch].amount;
            let price = arrOfProducts[resultOfSearch].product.price;

            if (flag) {
                // increment
                totalSum = totalSum + price;
                ++amount;
            } else {
                // decrement
                if (amount) {
                    totalSum = totalSum - price;
                    --amount;
                }
            }
            arrOfProducts[resultOfSearch].sum = +(price * amount).toFixed(2);
            arrOfProducts[resultOfSearch].amount = amount;
        }
        return {arrOfProducts: [...arrOfProducts], totalSum: totalSum}
    }

    getTotalSum() {

        let arrOfProducts = this.arrOfProducts;
        let totalSum = 0;

        if (arrOfProducts.length) {
            totalSum = arrOfProducts.reduce((sum, item) => {
                return sum + item.sum;
            }, 0);
        }
        return {arrOfProducts: [...arrOfProducts], totalSum: totalSum}
    }

    deleteFromBasket(id) {
        const resultOfSearch = this.searchProduct(id);
        let arrOfProducts = this.arrOfProducts;
        let element = arrOfProducts[resultOfSearch];
        let totalSum = this.totalSum;

        if (resultOfSearch >= 0) {
            totalSum = +(totalSum + -element.sum).toFixed(2);
            arrOfProducts.splice(resultOfSearch, 1);
        }

        return {arrOfProducts: [...arrOfProducts], totalSum: totalSum}
    }

    addToBasket(product) {

        const resultOfSearch = this.searchProduct(product.id);
        let arrOfProducts = this.arrOfProducts;
        let totalSum = this.totalSum;

        if (resultOfSearch >= 0) {
            return this.changeAndCount(product.id, 1); //decrement
        }

        arrOfProducts = [...arrOfProducts,{product: product, amount: 1, sum: +product.price}]
        totalSum +=product.price;

        return  {arrOfProducts: [...arrOfProducts], totalSum: totalSum}

}


decrement(id)
{
    return this.changeAndCount(id, 0);
}

increment(id)
{
    return this.changeAndCount(id, 1);
}
}

export default CountingHelper;
