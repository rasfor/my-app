import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToProps = (state) => {
  return {
    isAuthorized: state.auth.isAuthorized
  }
}

export const WithAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    if (!props.isAuthorized) return <Navigate to='/login' />
    return <Component {...props} />;
  }

  let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

  return ConnectedRedirectComponent;
}
