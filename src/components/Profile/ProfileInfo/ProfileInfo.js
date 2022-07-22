import module from './ProfileInfo.module.css';
import StatusWithHooks from "../Status/StatusWithHooks";

const ProfileInfo = (props) => {
    const changePhoto = (e) => {
        props.updatePhoto(e.target.files[0]);
    }
  return (
    <div className={module.currentUser}>
      <div>
          <img
              src={props.profileData.photos.large ||
                  'https://avatars.mds.yandex.net/get-zen_doc/1708007/pub_6043694a665e4413f3c4ad55_6043ad4d58285736ddaf8c1e/scale_1200'} />
          {props.isOwner && <input onChange={changePhoto} type={"file"}/>}
      </div>
      <div>
        {props.profileData.fullName}
      </div>
      <StatusWithHooks status={props.status || '---'} updateUserStatus={props.updateUserStatus} />
    </div>
  )
}

export default ProfileInfo;