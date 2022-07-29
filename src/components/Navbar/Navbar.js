import React from 'react';
import module from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Box from '@mui/material/Box';


const Navbar = () => {

    const navBarItems = [
        {path:'/profile', name:'Profile'},
        {path:'/news', name:'News'},
        {path:'/dialogs', name:'Messages'},
        {path:'/settings', name:'Settings'},
        {path:'/music', name:'Music'},
        {path:'/allusers', name:'All users'}
    ]

    const [selectedItem, setSelectedItem] = React.useState(null);

    const handleListItemClicked = (clickedItemValue) => {
        setSelectedItem(clickedItemValue);
    }

  return (
      <Box sx={{ bgcolor: 'background.paper'}}>
      <List >
          {navBarItems.map((itemObj)=>{
              return <ListItemButton
                  key={itemObj.path}
                  selected={selectedItem === itemObj.path}
                  onClick={(e)=>handleListItemClicked(itemObj.path)}
                  component={NavLink} to={itemObj.path}> {itemObj.name}</ListItemButton>
          })}

      </List>
      </Box>
  );
}

export default Navbar;