import Profile from './Profile';
import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { WithAuthRedirect } from '../hoc/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfile(this.props.router.params.userId);
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
  connect(matchStateToProps, { getUserProfile }),
  WithAuthRedirect,
  withRouter
)(ProfileContainer);

