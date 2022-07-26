import React from "react";
import {Field, reduxForm} from "redux-form";
import { Navigate } from "react-router-dom";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import module from './Login.module.css'

const Login = (props) => {
    let onSubmit = (formData) => {
        props.login(formData);
    }
    if (props.isAuthorized) return ( <Navigate to="/profile" />)
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
  )
}

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  return (
      <form onSubmit={handleSubmit}>
          {createField("email","email", Input, [required])}
          {createField("password","password", Input, [required], {type:"password"})}
          {createField(null,"rememberMe", Input, [], {type:"checkbox"}, "Remember me")}
          { error && <div className={module.formError}>
              {error}
          </div>}
          {captchaUrl && <img src={captchaUrl} />}
          {captchaUrl && createField("Symbols from image","captcha", Input, [required],{})
          }
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