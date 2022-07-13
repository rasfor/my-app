import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {Navigate} from "react-router-dom";
import module from './Login.module.css'

const Login = (props) => {
    let onSubmit = (formData) => {
        props.login(formData);
    }
    if (props.isAuthorized) return ( <Navigate to="/profile" />)
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={"email"} name={"email"} component={Input} validate={[required]} />
        </div>
        <div>
          <Field placeholder={"password"} name={"password"} component={Input} validate={[required]} />
        </div>
        <div>
          <Field type={"checkbox"} name={"rememberMe"} component={"input"}/>remember me
        </div>
          { props.error && <div className={module.formError}>
              {props.error}
          </div>}
        <div>
          <button>login</button>
        </div>
      </form>
  )
}

const LoginReduxForm = reduxForm({
    form:"login"
})(LoginForm)


export default Login;