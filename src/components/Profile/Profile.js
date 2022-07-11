import module from './Profile.module.css'
import MyPostsContainer from './Myposts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={module.profile}>
      {!!props.profile && <ProfileInfo profileData={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />}
      <MyPostsContainer store={props.store} />
    </div>
  )
}

export default Profile;