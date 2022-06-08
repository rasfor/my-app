import { NavLink } from 'react-router-dom';
import module from './Dialog.module.css'

const Dialog = () => {
  return (
    <div className={module.dialogs}>
      <div className={module.contacts}>
        <div className={module.contact + ' ' + module.active}>
          <NavLink to='/dialogs/1'>Zulya</NavLink></div>
        <div className={module.contact}>
          <NavLink to='/dialogs/2'>Timur</NavLink></div>
        <div className={module.contact}>
          <NavLink to='/dialogs/3'>Bakha</NavLink></div>
        <div className={module.contact}>
          <NavLink to='/dialogs/4'>Gulshatik</NavLink></div>
      </div>
      <div className={module.messages}>
        <div className={module.message}>Hello</div>
        <div className={module.message}>What's up?</div>
        <div className={module.message}>To be honest, I love you</div>
      </div>
    </div>

  );
}

export default Dialog;