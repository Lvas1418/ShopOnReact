import React, {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {Layout} from "antd";

import ProductList from 'AppShop/Pages/ProductList';
import {ProductDelivery} from 'AppShop/Pages/Delivery/delivery';
import AboutCompany from 'AppShop/Pages/About/about';
import ProductDetails from 'AppShop/Pages/ProductDetails';

import Basket from 'AppShop/Pages/Basket';
import Alert from 'AppShop/UI/Alert/Alert';
import Auth from 'AppShop/UI/Auth/auth';

import styles from './App.module.css';
import Preloader from "./UI/Preloader/preloader"
import HeaderMenu from "./UI/Header/header";

const {Header, Footer, Content} = Layout;

function AppComponent(props) {

    const {
        actionGetData,
        actionHidePreloader,
        showPreloader,
        showAlert,
        showAuth,
        isAuthorized,
        data: arrOfProducts,
    } = props;
    useEffect(() => {
        !arrOfProducts.length && actionGetData(null, actionHidePreloader)
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
                                {showPreloader ? <Preloader/> : <ProductList/>}
                                {showAlert && <Alert/>}
                                {showAuth && <Auth/> }
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
                                {isAuthorized ?
                                    <Basket/> :
                                    <Redirect to={{pathname: "/" }}/>
                                }
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

export default AppComponent;

