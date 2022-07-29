import module from './Header.module.css';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';


const Header = (props) => {
  return (
      <AppBar position="static" className={module.header}>
        <Toolbar>
        {props.isAuthorized &&
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {props.login}
              </Typography>}
            {props.isAuthorized &&<Button color="inherit" onClick={props.logout}>Logout </Button >}
            {!props.isAuthorized &&
              <Button color="inherit" component={NavLink}  to='/login'>
                Login
              </Button>}
        </Toolbar>
      </AppBar>
  );
}

export default Header;