import React from 'react';
import { createUpdateNewMessageTextObj, createSendMessageObj } from '../../redux/store'
import StoreContext from '../../StoreContext';
import Dialog from './Dialog'


const DialogContainer = (props) => {


  return (
    <StoreContext.Consumer >
      {
        (store) => {

          let state = store.getState();

          const sendNewMessage = () => {
            store.dispatch(createSendMessageObj())
          }

          const updateNewMessageText = (text) => {
            store.dispatch(createUpdateNewMessageTextObj(text));
          };
          return <Dialog contacts={state.dialogs.contacts}
            newMessageText={state.dialogs.newMessageText}
            messages={state.dialogs.messages}
            sendNewMessage={sendNewMessage}
            updateNewMessageText={updateNewMessageText} />
        }
      }
    </StoreContext.Consumer>

  );
}

export default DialogContainer;