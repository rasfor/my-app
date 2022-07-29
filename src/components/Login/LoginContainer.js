import { connect } from 'react-redux';
import React from "react";
import Login from "./Login";
import {login} from "../../redux/auth-reducer";

const LoginContainer = (props) => {
    return (
        <Login {...props}/>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthorized: state.auth.isAuthorized,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {login})(LoginContainer);