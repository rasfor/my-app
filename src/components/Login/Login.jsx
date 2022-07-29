import React from "react";
import {Field, reduxForm} from "redux-form";
import { Navigate } from "react-router-dom";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import module from './Login.module.css'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

const Login = (props) => {
    let onSubmit = (formData) => {
        props.login(formData);
    }
    if (props.isAuthorized) return ( <Navigate to="/profile" />)
  return (
    <div>
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <Avatar>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                LOGIN
            </Typography>
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </Box>
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
            <Button
                type="submit"
                fullWidth
                variant="contained">Sign In</Button>
        </div>
      </form>
  )
}

const LoginReduxForm = reduxForm({
    form:"login"
})(LoginForm)


export default Login;