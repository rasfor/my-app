import { NavLink } from 'react-router-dom';
import module from './Message.module.css';


const Message = (props) => {

  return (
    <div className={module.message}>
      {props.messageText}
      
    </div>
  );
}

export default Message;