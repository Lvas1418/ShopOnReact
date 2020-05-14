import React from "react";
import {Formik, Form, useField, useFormik} from 'formik';
import * as Yup from 'yup';
import apiCall from './../../ApiCall/ApiCall';
import {CustomInput} from './elements/CustomInput';
import styles from "../Auth/auth.module.css";

const stopEvent = (e) => e.stopPropagation();

const Auth = () => {

    return <section className={styles.background} onClick={stopEvent}>
        <div className={styles.container} onClick={stopEvent}>
            <h1 className={styles.title}>
                Sign In
            </h1>
            <Formik initialValues={{
                password: "",
                email: ""
            }}
                    validationSchema={Yup.object({
                        password: Yup.string()
                            .min(4, "Must be at least 4 characters")
                            .max(15, "Must be 15 characters or less")
                            .required("Required"),
                        email: Yup.string()
                            .email("Invalid email address")
                            .required("Required")
                    })

                    }
             onSubmit={(values, {setSubmitting, resetForm}) => {
                const ApiKey='AIzaSyAm_qp3BegV7oNMnn6NCT3m8BvtftrkjP0';
                 const init = {
                     url:"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword",
                     method : 'POST',
                     body : JSON.stringify({
                         email: values.email,
                         password: values.password,
                         returnSecureToken: "true"
                     } ),
                     endpoint : `?key=${ApiKey}`,
                     headers : {
                     'Content-Type': "application/json",
                 }
                 }
                 setTimeout(() => {
                     apiCall(init)
                         .then(response=>console.log(response.data))
                         .catch((onerror=>console.log(onerror)))
                     resetForm();
                     setSubmitting(false);
                 }, 2000);

                    }}>
                {props => (
                    <Form className={styles.form}>

                        <CustomInput label={"Password"} name={"password"} type={"text"} placeholder={"Frankpassword"}/>
                        <CustomInput label={"E-mail"} name={"email"} type={"text"} placeholder={"Frank@mail.com"}/>
                        <button type="submit" className={styles.btnSubmit}>{props.isSubmitting ? "Loadin" : "Submit"}</button>
                    </Form>
                )}
            </Formik>

        </div>
    </section>
};
export default Auth;