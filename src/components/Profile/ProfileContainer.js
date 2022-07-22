import Profile from './Profile';
import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus, updatePhoto } from '../../redux/profile-reducer';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { WithAuthRedirect } from '../hoc/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if(!userId)
        this.props.history.push("/login")
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.router.params.userId!=this.props.router.params.userId) {
      this.refreshProfile();

    }
  }


  render() {
    return (
      <Profile {...this.props} isOwner={!this.props.router.params.userId} />
    )
  }

}

let matchStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    status: state.profile.status,
    authorizedUserId: state.auth.userId,
    isAuthorized: state.auth.isAuthorized
  }
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default compose(
  connect(matchStateToProps, { getUserProfile, getUserStatus, updateUserStatus, updatePhoto }),
  WithAuthRedirect,
  withRouter
)(ProfileContainer);

