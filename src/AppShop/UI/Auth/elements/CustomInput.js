import {useField} from "formik";
import React from "react";
import styles from './CustomInput.module.css'

export  const CustomInput = ({label, ...props}) => {

    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name} className={styles.label}>
                {label}
            </label>
            <input {...field} {...props} className={styles.fieldInput}/>
                <div className={styles.warning}>
                    {meta.touched && meta.error ?  meta.error :" "}
                </div>

        </>
    )
}