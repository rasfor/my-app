import React from "react";
import Contacts from "./Contacts";

const ProfileData = ({profileData, isOwner, changeEditMode}) => {
    return (
        <div>
            {isOwner && <button onClick={() => changeEditMode(true)}>Edit profile</button>}
            <div>
                <b>Full name:</b> {profileData.fullName}
            </div>
            <div>
                <b>Looking for a job:</b> {profileData.lookingForAJob ? "yes":"no"}
            </div>
            <div>
                <b>About me:</b> {profileData.aboutMe}
            </div>
            {profileData.lookingForAJob &&
                <div>
                    <b>Professional skills: </b>{profileData.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>Contacts: </b>
                {Object.keys(profileData.contacts)
                    .map(key=><Contacts key={key} contactTitle={key} contactValue={profileData.contacts[key]} />)}
            </div>
        </div>
    )
}

export default ProfileData;