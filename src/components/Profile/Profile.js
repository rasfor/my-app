import module from './Profile.module.css'
import Myposts from '../Myposts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
  return (
    <div className={module.profile}>
      <ProfileInfo />
      <Myposts />
    </div>
  )
}

export default Profile;