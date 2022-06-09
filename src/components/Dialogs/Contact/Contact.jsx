import { NavLink } from 'react-router-dom';
import module from './Contact.module.css'

const setClass = ({ isActive }) => isActive ? module.active : module.contact;

const Contact = (props) => {
  return (
    <div className={setClass}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>

  );
}

export default Contact;