import Profile from './Profile';
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer'

class ProfileContainer extends React.Component{
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then((response)=>{
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


export default connect(matchStateToProps,{setUserProfile})(ProfileContainer);