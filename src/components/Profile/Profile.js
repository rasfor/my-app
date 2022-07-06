import module from './Profile.module.css'
import MyPostsContainer from './Myposts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { Navigate } from 'react-router-dom'

const Profile = (props) => {

  if (!props.isAuthorized) return <Navigate to='/login' />

  return (
    <div className={module.profile}>
      {!!props.profile && <ProfileInfo profileData={props.profile} />}
      <MyPostsContainer store={props.store} />
    </div>
  )
}

export default Profile;