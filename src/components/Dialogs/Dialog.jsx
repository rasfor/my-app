import { NavLink } from 'react-router-dom';
import module from './Dialog.module.css';
import Contact from './Contact/Contact';
import Message from './Message/Message';
import Sender from './Sender/Sender'
import Recipient from './Recipient/Recipient'
import React from 'react';


const Dialog = (props) => {

  let contactElements = props.dialogsState.contacts.map((contact) => {
    return <Contact id={contact.id} name={contact.name} />
  })

  let newMessageElement = React.createRef();

  const sendNewMessage = () => {
    console.log("Message: " + newMessageElement.current.value);
  }

  return (
    <div className={module.dialogs}>
      <div className={module.contacts}>
        {contactElements}
      </div>
      <div className={module.messages}>
        <Sender messageText='Hello' ava='https://i.pinimg.com/originals/7b/ce/25/7bce255e224f6cc9b5d52e60ee587abb.jpg' />
        <Recipient messageText='Hi' ava='https://avatars.mds.yandex.net/get-zen_doc/1708007/pub_6043694a665e4413f3c4ad55_6043ad4d58285736ddaf8c1e/scale_1200' />
      </div>
      <div className={module.newMessage}>
        <textarea ref={newMessageElement} ></textarea>
        <button onClick={sendNewMessage}>Send</button>
      </div>

    </div>

  );
}

export default Dialog;