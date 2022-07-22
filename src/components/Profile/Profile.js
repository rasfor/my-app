import module from './Profile.module.css'
import MyPostsContainer from './Myposts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({profile, status, updateUserStatus, store, isOwner, updatePhoto, saveProfile}) => {
  return (
    <div className={module.profile}>
      {!!profile && <ProfileInfo profileData={profile}
                                 isOwner={isOwner}
                                 status={status}
                                 updatePhoto={updatePhoto}
                                 updateUserStatus={updateUserStatus}
                                 saveProfile={saveProfile}/>}
      <MyPostsContainer store={store} />
    </div>
  )
}

export default Profile;