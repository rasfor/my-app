import module from './ProfileInfo.module.css';
import StatusWithHooks from "../Status/StatusWithHooks";

const ProfileInfo = (props) => {
  return (
    <div className={module.currentUser}>
      <img
        src={props.profileData.photos.large != null ?
          props.profileData.photos.large :
          'https://avatars.mds.yandex.net/get-zen_doc/1708007/pub_6043694a665e4413f3c4ad55_6043ad4d58285736ddaf8c1e/scale_1200'} />
      <div>
        {props.profileData.fullName}
      </div>
      <StatusWithHooks status={props.status || '---'} updateUserStatus={props.updateUserStatus} />
    </div>
  )
}

export default ProfileInfo;