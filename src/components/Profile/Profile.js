import module from './Profile.module.css'
import MyPostsContainer from './Myposts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({profile, status, updateUserStatus, store, isOwner, updatePhoto}) => {
  return (
    <div className={module.profile}>
      {!!profile && <ProfileInfo profileData={profile}
                                 isOwner={isOwner}
                                 status={status}
                                 updatePhoto={updatePhoto}
                                 updateUserStatus={updateUserStatus} />}
      <MyPostsContainer store={store} />
    </div>
  )
}

export default Profile;