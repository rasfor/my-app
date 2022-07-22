import React from "react";
import { reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";

const ProfileDataForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <b>Full name:</b> {createField("Full name","fullName", Input, [])}
            </div>
            <div>
                <b>Looking for a job:</b>
                {createField("","lookingForAJob", Input, [],{type:"checkbox"})}
            </div>
            <div>
                <b>Professional skills: </b>
                {createField("My professional skills","lookingForAJobDescription", Textarea, [])}
            </div>
            <div>
                <b>About me: </b>
                {createField("About me","aboutMe", Textarea, [])}
            </div>
            <div>
                <button>Save from</button>
            </div>
        </form>
    )
}

const ProfileDataFormContainer = reduxForm({
    form:"profileEdit",
    enableReinitialize: true,
    destroyOnUnmount: false
})(ProfileDataForm)

export default ProfileDataFormContainer;