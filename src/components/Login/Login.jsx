import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const Login = (props) => {
    let onSubmit = (formData) => {
        props.login(formData);
    }
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