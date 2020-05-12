import React, {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {connect} from 'react-redux'
import {Layout} from "antd";

import ProductList from "./Pages/ProductList/index";
import {ProductDelivery} from "./Pages/Delivery/delivery";
import AboutCompany from "./Pages/About/about";
import ProductDetails from "./Pages/ProductDetails/productDeails"

import Basket from "./Pages/Basket/basket";
import Alert from "./UI/Alert/Alert";
import Auth from "./UI/Auth/auth";

import styles from './App.module.css';
import Preloader from "./UI/Preloader/preloader"
import HeaderMenu from "./UI/Header/header";

import {actionGetData} from './Redux/Actions/actionsFetch';

const {Header, Footer, Content} = Layout;

function App(props) {

    const {
        showPreloader,
        dispatch,
        showAlert,
        showAuth,
    } = props;
    useEffect(() => {
        !props.data.length && props.dispatch(actionGetData(null, dispatch))
    }, []);

    return (
        <div className="App">
            <Router>
                <Layout style={{minHeight: '100vh'}}>
                    <Header className={styles.header}>
                        <HeaderMenu/>
                    </Header>
                    <Content className={styles.content}>
                        <Switch>
                            <Route path="/" exact>

                                {showPreloader ? <Preloader/> : <ProductList data={props}/>}
                                {showAlert ? <Alert/> : null}
                                {showAuth ? <Auth/> : null}
                            </Route>
                            <Route path="/productDelivery">
                                <ProductDelivery/>
                            </Route>
                            <Route path="/about">
                                <AboutCompany/>
                            </Route>
                            <Route path="/productDetails">
                                <ProductDetails/>
                            </Route>
                            <Route path="/basket">
                                <Basket/>
                            </Route>
                        </Switch>
                    </Content>
                    <Footer style={{backgroundColor: "black"}}>
                    </Footer>
                </Layout>
            </Router>
        </div>
    );
}

const mapToProps = (store) => {
    return {
        data: store.products.data,
        showPreloader: store.stateOfPreloader.showPreloader,
        showAlert: store.alert.alertState.showAlert,
        showAuth: store.auth.authState.showAuth
    }
};

export default connect(mapToProps)(App);
