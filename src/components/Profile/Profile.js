import module from './Profile.module.css'
import Myposts from '../Myposts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <div className={module.profile}>
      <ProfileInfo />
      <Myposts commentElements={props.commentElements} />
    </div>
  )
}

export default Profile;