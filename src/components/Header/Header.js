import module from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={module.header}>
      <img src='https://i0.wp.com/cdn.iconscout.com/icon/free/png-256/naruto-436774.png' />
 
        {props.isAuthorized ?
            <div>
                {props.login} <button onClick={props.logout}>Logout </button>
            </div>
            :<NavLink to='/login'>Login </NavLink>}

    </header>
  );
}

export default Header;