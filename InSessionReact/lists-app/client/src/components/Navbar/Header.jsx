import React, { useState } from 'react';
import SwitchTheme from './SwitchTheme';
import SearchBar from '../Utils/SearchBar';
import { AppBar, Avatar,Box, Divider, Fade, ListItemIcon, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import { Inventory, Settings, Logout } from '@mui/icons-material';


const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',

});

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up("sm")]: {
    display: 'flex',
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up("sm")]: {
    display: 'none',
  },
}));

const Header = ({ setMode, mode }) => {
   const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: {xs:"none", sm:"block"} }}>ListMate </Typography>
        <Inventory sx={{ display: { xs: "block", sm: "none" } }} mr={ 2} />
        <SearchBar />
        
        <Icons>
          <SwitchTheme setMode={setMode} mode={mode}/>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
             onClick={handleClick}
          />
        </Icons>
        <UserBox onClick={handleClick}>
           <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
      
      <Menu
         id="fade-menu"
         open={open}
          onClose={handleClose}
        anchorEl={anchorEl}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 4,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        TransitionComponent={Fade}
      >
        <MenuItem >
          <Avatar /> My account
        </MenuItem>
        <MenuItem >
          <SwitchTheme setMode={setMode} mode={mode}/>
        </MenuItem>
        <Divider />
        <MenuItem >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Header