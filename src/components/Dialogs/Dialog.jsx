import { NavLink } from 'react-router-dom';
import module from './Dialog.module.css';


const Dialog = (props) => {
  return (
    <div className={module.dialogs}>
      <div className={module.contacts}>
        {props.contactElements}
      </div>
      <div className={module.messages}>
        {props.messageElements}
      </div>
    </div>

  );
}

export default Dialog;