import { NavLink } from 'react-router-dom';
import module from './Dialog.module.css';
import Contact from './Contact/Contact';
import Message from './Message/Message';
import React from 'react';


const Dialog = (props) => {

  let contactElements = props.dialogsState.contacts.map((contact) => {
    return <Contact id={contact.id} name={contact.name} />
  })

  let messageElements = props.dialogsState.messages.map((message) => {
    return <Message id={message.id} messageText={message.messageText} />
  })

  
  let newMessageElement = React.createRef();
  
  const sendNewMessage = () => {
    console.log("Message: "+newMessageElement.current.value);
  }

  return (
    <div className={module.dialogs}>
      <div className={module.contacts}>
        {contactElements}
      </div>
      <div className={module.messages}>
        {messageElements}
      </div>
      <div>
        <textarea ref={newMessageElement} ></textarea>
        <button onClick={sendNewMessage}>Send</button>
      </div>
      
    </div>

  );
}

export default Dialog;