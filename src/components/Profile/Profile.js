import module from './Profile.module.css'
import Myposts from '../Myposts/Myposts';


const Profile = () => {
  return (
    <div className={module.profile}>
      <div className={module.currentUser}>
        <img src='https://avatars.mds.yandex.net/get-zen_doc/1708007/pub_6043694a665e4413f3c4ad55_6043ad4d58285736ddaf8c1e/scale_1200' />
        <div>
          Description
        </div>
      </div>
      <Myposts />
    </div>
  )
}

export default Profile;