import {connect} from "react-redux";
import AppComponent from "./App";
import {actionGetData} from './Redux/Actions/actionsFetch';
import {actionHidePreloader} from "./Redux/Actions/actionsForPreloader";

const mapDispatchToProps = {
    actionGetData,
    actionHidePreloader,
}

const mapToProps = (store) => {
    return {
        data: store.products.data,
        showPreloader: store.stateOfPreloader.showPreloader,
        showAlert: store.alert.alertState.showAlert,
        showAuth: store.auth.authState.showAuth,
        isAuthorized: store.auth.authState.isAuthorized
    }
};

const App = connect(mapToProps,mapDispatchToProps)(AppComponent);
export default App;
