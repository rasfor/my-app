import { createSendMessageObj } from '../../redux/dialogs-reducer'
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
    sendNewMessage: (newMessageTxt) => {
      dispatch(createSendMessageObj(newMessageTxt))
    }
  }
}

export default compose(
  WithAuthRedirect,
  connect(mapStateToProps, mapDispatchTpProps))
  (Dialog)