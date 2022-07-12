import {Field, reduxForm} from "redux-form";
import React from "react";

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"newMessageText"} component={"textarea"}></Field>
            <button>Send</button>
        </form>
    )
}

const MessageReduxForm = reduxForm({
    form:"dialog"
})(MessageForm)

export default MessageReduxForm;