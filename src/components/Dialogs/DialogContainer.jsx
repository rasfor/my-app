import React from 'react';
import { createUpdateNewMessageTextObj, createSendMessageObj } from '../../redux/store'
import Dialog from './Dialog'


const DialogContainer = (props) => {

  let state = props.store.getState();

  const sendNewMessage = () => {
    props.store.dispatch(createSendMessageObj())
  }

  const updateNewMessageText = (text) => {
    props.store.dispatch(createUpdateNewMessageTextObj(text));
  };

  return (
    <Dialog contacts={state.dialogs.contacts}
      newMessageText={state.dialogs.newMessageText}
      messages={state.dialogs.messages}
      sendNewMessage={sendNewMessage}
      updateNewMessageText={updateNewMessageText} />
  );
}

export default DialogContainer;