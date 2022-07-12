import {Field, reduxForm} from "redux-form";
import React from "react";

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"}
                       component={"textarea"}
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