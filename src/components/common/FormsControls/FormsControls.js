 import React from "react";
import module from "./FormsControls.module.css"
 import {Field} from "redux-form";

const FormControl = ({input, meta:{touched, error}, children}) => {
    const hasError = touched && error;

    return (
        <div className={module.formControl +" "+ (hasError ? module.error: "")}>
            <div>
                {children}
            </div>
            <div>
                { hasError && <span>{error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
                <textarea {...input} {...restProps} />
        </FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    )
}

export const createField = (placeholder, name, component, validators, props = {}, text="" ) => {
   return <div>
        <Field placeholder={placeholder}
               name={name}
               component={component}
               validate={validators}
               {...props}/>{text}
    </div>
}