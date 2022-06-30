import { createUpdateNewMessageTextObj, createSendMessageObj } from '../../redux/store'
import { connect } from 'react-redux';
import Dialog from './Dialog'


let mapStateToProps = (state) => {
  return {
    contacts:state.dialogs.contacts,
    newMessageText:state.dialogs.newMessageText,
    messages:state.dialogs.messages
  }
}

let mapDispatchTpProps = (dispatch) => {
  return {
    sendNewMessage:()=>{
      dispatch(createSendMessageObj())
    },
    updateNewMessageText: (text)=> {
      dispatch(createUpdateNewMessageTextObj(text));
    }
  }
}

const DialogContainer = connect(mapStateToProps,mapDispatchTpProps)(Dialog);

export default DialogContainer;