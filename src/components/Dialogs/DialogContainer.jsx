import { createUpdateNewMessageTextObj, createSendMessageObj } from '../../redux/store'
import { connect } from 'react-redux';
import Dialog from './Dialog';
import { WithAuthRedirect } from '../hoc/WithAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
  return {
    contacts: state.dialogs.contacts,
    newMessageText: state.dialogs.newMessageText,
    messages: state.dialogs.messages,
  }
}

let mapDispatchTpProps = (dispatch) => {
  return {
    sendNewMessage: () => {
      dispatch(createSendMessageObj())
    },
    updateNewMessageText: (text) => {
      dispatch(createUpdateNewMessageTextObj(text));
    }
  }
}

export default compose(
  WithAuthRedirect,
  connect(mapStateToProps, mapDispatchTpProps))
  (Dialog)