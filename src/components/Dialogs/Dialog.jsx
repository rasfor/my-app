import { NavLink } from 'react-router-dom';
import module from './Dialog.module.css';
import Contact from './Contact/Contact';
import Message from './Message/Message';

const Dialog = () => {
  return (
    <div className={module.dialogs}>
      <div className={module.contacts}>
        <Contact id='1' name='Kakashi' />
        <Contact id='2' name='Sasuke' />
        <Contact id='3' name='Sakura' />
        <Contact id='4' name='Hinata' />
      </div>
      <div className={module.messages}>
        <Message messageText='Hello' />
        <Message messageText='Yo' />
        <Message messageText='Watashi backa' />
        <Message messageText='kek' />
        <Message messageText='chebureck' />
      </div>
    </div>

  );
}

export default Dialog;