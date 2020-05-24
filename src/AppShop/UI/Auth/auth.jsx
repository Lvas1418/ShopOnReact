import React, {useState} from "react";
import {connect} from 'react-redux'

import {Formik, Form} from 'formik';
import * as Yup from 'yup';

import apiCall from './../../ApiCall/ApiCall';
import {CustomInput} from './elements/CustomInput';
import {hideAuth, signIn} from '../../Redux/Actions/auth'
import {showAlert} from '../../Redux/Actions/alert'
import styles from "../Auth/auth.module.css";

import firebase from "firebase";
import {App} from '../../firebase';
import {firebaseConfig} from '../../firebase';

const stopEvent = (e) => e.stopPropagation();

const Auth = (store) => {
    const {dispatch} = store;
    const [SubmittingState, ChangeSubmittingState] = useState("Submit")
    const logIn = (values, setSubmitting, resetForm) => {
        const ApiKey = firebaseConfig.apiKey;
        const init = {
            url: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword",
            method: 'POST',
            body: JSON.stringify({
                email: values.email,
                password: values.password,
                returnSecureToken: "true"
            }),
            endpoint: `?key=${ApiKey}`,
            headers: {
                'Content-Type': "application/json",
            }
        }

        apiCall(init)
            .then(response => dispatch(signIn(response.data.idToken)))
            .catch((error => {
                ChangeSubmittingState(<b className={styles.fail}>Failed</b>)
                setTimeout(() => {
                    resetForm();
                    setSubmitting(false);
                    ChangeSubmittingState("Submit");
                }, 2000);
            }))

    }
    const close = () => dispatch(hideAuth());

    const SignInWithProvider = (provider, providersName) => {
        App.auth().signInWithPopup(provider)
            .then((response => {
                if (response.credential) {
                    dispatch(signIn(response.credential.accessToken));
                    dispatch(showAlert(`Sign in with ${providersName} is successful.`))
                }
            }))
            .catch(error => dispatch(showAlert(`Sign in with ${providersName} is failed. ${error}`)));
    }
    const tryGoogleSignIn = () => {
        close();
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        SignInWithProvider(googleProvider, "Google");
    }

    const tryFacebookSignIn = () => {
        close();
        const FacebookProvider = new firebase.auth.FacebookAuthProvider();
        SignInWithProvider(FacebookProvider, "Facebook");
    }

    return <section className={styles.background} onClick={stopEvent}>
        <div className={styles.container} onClick={stopEvent}>
            <h1 className={styles.title}>
                Sign In
            </h1>
            <Formik initialValues={{
                password: "",
                email: ""
            }}
                    validationSchema={
                        Yup.object({
                            password: Yup.string()
                                .min(6, "Must be at least 6 characters")
                                .max(15, "Must be 15 characters or less")
                                .required("Required"),
                            email: Yup.string()
                                .email("Invalid email address")
                                .required("Required")
                        })
                    }
                    onSubmit={(values, {setSubmitting, resetForm}) => logIn(values, setSubmitting, resetForm)}>
                {props => (
                    <Form className={styles.form} id={"authForm"}>
                        <CustomInput label={"Password"} name={"password"} type={"text"}
                                     placeholder={"Frank password"}/>
                        <CustomInput label={"E-mail"} name={"email"} type={"text"} placeholder={"Frank@mail.com"}/>

                        <button type="submit"
                                className={styles.btn}>{SubmittingState}</button>
                        <hr width="100%" color="white"/>
                        <button type="button" className={styles.btn} onClick={tryGoogleSignIn}>Sign in with
                            Google
                        </button>
                        <button type="button" className={styles.btn} onClick={tryFacebookSignIn}>Sign in with
                            Facebook
                        </button>
                        <hr width="100%" color="white"/>
                        <button type="button" className={styles.btn} onClick={close}>Сancel</button>
                    </Form>
                )}
            </Formik>

        </div>
    </section>
};

const mapToProps = (store) => {
    return {authState: store.auth.authState}
};

export default connect(mapToProps)(Auth);