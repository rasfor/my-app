import module from './ProfileInfo.module.css';
import StatusWithHooks from "../Status/StatusWithHooks";
import React, {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";
import ProfileData from "./ProfileData";

const ProfileInfo = (props) => {

    const [editMode, changeEditMode] = useState(false);

    const changePhoto = (e) => {
        props.updatePhoto(e.target.files[0]);
    }

    let onSubmit = (formData) => {
        props.saveProfile(formData);
    }

    const profile = {...props.profileData};
    delete profile.photos;
    delete profile.contacts;
    delete profile.userId;

  return (
    <div className={module.currentUser}>
      <div>
          <img
              src={props.profileData.photos.large ||
                  'https://avatars.mds.yandex.net/get-zen_doc/1708007/pub_6043694a665e4413f3c4ad55_6043ad4d58285736ddaf8c1e/scale_1200'} />
          {props.isOwner && <input onChange={changePhoto} type={"file"}/>}
      </div>
      <div>
          {
              editMode ? <ProfileDataForm  initialValues={profile} onSubmit={onSubmit}/>:
                  <ProfileData profileData={props.profileData}
                               isOwner={props.isOwner}
                               changeEditMode={changeEditMode}/>
          }
      </div>
        <div>
            <StatusWithHooks status={props.status || '---'} updateUserStatus={props.updateUserStatus} />

        </div>
    </div>
  )
}





export default ProfileInfo;