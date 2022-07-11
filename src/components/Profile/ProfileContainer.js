import Profile from './Profile';
import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profile-reducer';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { WithAuthRedirect } from '../hoc/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 24667;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }
  render() {
    return (
      <Profile {...this.props} />
    )
  }

}

let matchStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    status: state.profile.status
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
  connect(matchStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  WithAuthRedirect,
  withRouter
)(ProfileContainer);

