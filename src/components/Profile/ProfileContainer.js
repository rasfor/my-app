import Profile from './Profile';
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer';
import { useLocation, useNavigate, useParams} from "react-router-dom";

class ProfileContainer extends React.Component{
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/'+userId,{
      withCredentials:true
    }).then((response)=>{
      this.props.setUserProfile(response.data);
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