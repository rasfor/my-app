import { NavLink } from 'react-router-dom';
import module from './Dialog.module.css';
import Contact from './Contact/Contact';
import Message from './Message/Message';

let contacts = [
  { id: 1, name: 'Hinata' },
  { id: 2, name: 'Sasuke' },
  { id: 3, name: 'Sakura' },
  { id: 4, name: 'Kakashi' }
]

let messages = [
  { id: 1, messageText: 'Hello' },
  { id: 2, messageText: 'Yo' },
  { id: 3, messageText: 'Watashi backa' },
  { id: 4, messageText: 'kek' },
  { id: 5, messageText: 'chebureck' }
]

let contactElements = contacts.map((contact) => {
  return <Contact id={contact.id} name={contact.name} />
})

let messageElements = messages.map((message) => {
  return <Message id={message.id} messageText={message.messageText} />
})

const Dialog = () => {
  return (
    <div className={module.dialogs}>
      <div className={module.contacts}>
        {contactElements}
      </div>
      <div className={module.messages}>
        {messageElements}
      </div>
    </div>

  );
}

export default Dialog;