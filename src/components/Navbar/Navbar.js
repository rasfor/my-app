import module from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const setClass = ({ isActive }) => isActive ? module.active : module.item;

const Navbar = () => {
  return (
    <nav className={module.nav}>
      <div className={module.item}>
        <NavLink className={setClass} to='/profile'>Profile</NavLink>
      </div>
      <div className={module.item}>
        <NavLink className={setClass} to='/news' >News</NavLink>
      </div>
      <div className={module.item} >
        <NavLink className={setClass} to="/dialogs" >Messages</NavLink>
      </div>
      <div className={module.item}>
        <NavLink className={setClass} to='/settings' >Settings</NavLink>
      </div>
      <div className={module.item}>
        <NavLink className={setClass} to='/music'>Music</NavLink>
      </div>
      <div className={module.item} >
        <NavLink className={setClass} to="/allusers">All users</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;