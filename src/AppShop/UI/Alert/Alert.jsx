import React from "react";
import styles from './alert.module.css';
import {connect} from "react-redux";
import {hideAlert} from '../../Redux/Actions/alert'

const Alert = (props) => {
    const {data, dispatch} = props;
    const stopEvent = (e) => e.stopPropagation();
    const closeAlert = () => dispatch(hideAlert(''));
    return <section className={styles.background} onClick={stopEvent}>
        <div className={styles.container} onClick={stopEvent}>
            <div className={styles.title}>
            </div>
            <div className={styles.context}>
                <p className={styles.message}>
                    {data.message}
                </p>
            </div>
            <div className={styles.btnContainer}>
                <button className={styles.closeBtn} onClick={closeAlert}> Close</button>
            </div>

        </div>
    </section>
};

const mapToProps = (store) => {
    return {data: store.alert.alertState}
};

export default connect(mapToProps)(Alert);
