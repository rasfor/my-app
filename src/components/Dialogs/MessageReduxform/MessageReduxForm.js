import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
const maxLength100 = maxLengthCreator(100);

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[required, maxLength100]} name={"newMessageText"} component={Textarea}></Field>
            <button>Send</button>
        </form>
    )
}

const MessageReduxForm = reduxForm({
    form:"dialog"
})(MessageForm)

export default MessageReduxForm;