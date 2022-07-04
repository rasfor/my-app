import Profile from './Profile';
import React from 'react';
import { connect } from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer';
import { useLocation, useNavigate, useParams} from "react-router-dom";
import { userApi } from '../../api/api';

class ProfileContainer extends React.Component{
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    userApi.getProfile(userId).then((data)=>{
      this.props.setUserProfile(data);
    })
  }
  render() {
    return (
      <Profile {...this.props} />
    )
  }

}

let matchStateToProps = (state) => {
  return {
    profile:state.profile.profile
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

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(matchStateToProps,{setUserProfile})(withUrlDataContainerComponent);