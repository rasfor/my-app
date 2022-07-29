import React from 'react';
import Header from './Header';
import { logout } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';


class HeaderContainer extends React.Component {

  render() {
    return (
      <Header {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthorized: state.auth.isAuthorized,
    login: state.auth.login

  }
}

export default compose(
  connect(mapStateToProps, { logout})
)(HeaderContainer)