import module from './Dialog.module.css';
import Contact from './Contact/Contact';
import Sender from './Sender/Sender'
import Recipient from './Recipient/Recipient'
import React from 'react';
import { createUpdateNewMessageTextObj, createSendMessageObj } from '../../redux/store'


const Dialog = (props) => {


  let contactElements = props.dialogsState.contacts.map((contact) => {
    return <Contact id={contact.id} name={contact.name} />
  })

  let newMessageElement = React.createRef();

  const sendNewMessage = () => {
    props.dispatch(createSendMessageObj())
    props.dialogsState.newMessageText = '';
  }

  const updateNewMessageText = () => {
    props.dispatch(createUpdateNewMessageTextObj(newMessageElement.current.value));
  };

  let messageElements = props.dialogsState.messages.map((message) => {
    if (message.self == true)
      return <Recipient messageText={message.messageText} ava='https://avatars.mds.yandex.net/get-zen_doc/1708007/pub_6043694a665e4413f3c4ad55_6043ad4d58285736ddaf8c1e/scale_1200' />
    else
      return <Sender messageText={message.messageText} ava='https://i.pinimg.com/originals/7b/ce/25/7bce255e224f6cc9b5d52e60ee587abb.jpg' />
  });

  return (
    <div className={module.dialogs}>
      <div className={module.contacts}>
        {contactElements}
      </div>
      <div className={module.messages}>
        {messageElements}
      </div>
      <div className={module.newMessage}>
        <textarea onChange={updateNewMessageText} ref={newMessageElement} value={props.dialogsState.newMessageText}></textarea>
        <button onClick={sendNewMessage}>Send</button>
      </div>

    </div>

  );
}

export default Dialog;