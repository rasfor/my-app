import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { setAuthUser } from '../../redux/auth-reducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component{

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',
        {
          withCredentials:true
        }).then((response) => {
          if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            this.props.setAuthUser(id, email, login)
          }
    })
  }

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

export default connect(mapStateToProps, {setAuthUser})(HeaderContainer);