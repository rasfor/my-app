import module from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={module.nav}>
      <div className={module.item}>
        <NavLink className={navData => navData.isActive ? module.active : module.item} to='/profile'>Profile</NavLink>
      </div>
      <div className={module.item}>
        <NavLink className={navData => navData.isActive ? module.active : module.item} to='/news' >News</NavLink>
      </div>
      <div className={module.item} >
        <NavLink className={navData => navData.isActive ? module.active : module.item} to='/dialogs' >Messages</NavLink>
      </div>
      <div className={module.item} >
        <a  >Settings</a>
      </div>
      <div className={module.item} >
        <a >Music</a>
      </div>
    </nav>
  );
}

export default Navbar;