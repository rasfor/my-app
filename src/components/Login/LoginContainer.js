import { connect } from 'react-redux';
import React from "react";
import Login from "./Login";
import {login} from "../../redux/auth-reducer";

const LoginContainer = (props) => {
    return (
        <Login login={props.login}/>
    )
}

let mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {login})(LoginContainer);