import {Field, reduxForm} from "redux-form";
import React from "react";
import {required, maxLengthCreator} from "../../../../../utils/validators/validators";
import {Textarea} from "../../../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"}
                       validate={[required,maxLength10]}
                       component={Textarea}
                       placeholder={"Enter your post"} />
            </div>
            <div>
                <button >Add post</button>
            </div>
        </form>
    )
}

const NewPostReduxForm = reduxForm({
    form:"newPost"
})(NewPostForm)

export default NewPostReduxForm;