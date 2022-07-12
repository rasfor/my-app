import module from './Dialog.module.css';
import Contact from './Contact/Contact';
import Sender from './Sender/Sender'
import Recipient from './Recipient/Recipient'
import React from 'react';
import MessageReduxForm from "./MessageReduxform/MessageReduxForm";

const Dialog = (props) => {

  const sendNewMessage = (values) => {
    props.sendNewMessage(values.newMessageText);
  }

  let contactElements = props.contacts.map((contact) => {
    return <Contact key={contact.id} id={contact.id} name={contact.name} />
  })

  let messageElements = props.messages.map((message) => {
    if (message.self == true)
      return <Recipient key={message.id} messageText={message.messageText} ava='https://avatars.mds.yandex.net/get-zen_doc/1708007/pub_6043694a665e4413f3c4ad55_6043ad4d58285736ddaf8c1e/scale_1200' />
    else
      return <Sender key={message.id} messageText={message.messageText} ava='https://i.pinimg.com/originals/7b/ce/25/7bce255e224f6cc9b5d52e60ee587abb.jpg' />
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
          <MessageReduxForm onSubmit={sendNewMessage} />
      </div>

    </div>

  );
}

export default Dialog;