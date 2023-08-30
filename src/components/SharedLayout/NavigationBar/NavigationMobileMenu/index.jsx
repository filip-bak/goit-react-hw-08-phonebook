import MenuIcon from '@mui/icons-material/Menu';
import { Button, Drawer } from '@mui/material';
import React from 'react';

const NavigationMobileMenu = ({ tabValue, handleChange, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsOpen(state => !state);
  };

  return (
    <>
      <Button variant="text" sx={{ height: '48px' }} onClick={toggleDrawer}>
        <MenuIcon fontSize="large" />
      </Button>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
        {children}
      </Drawer>
    </>
  );
};

export default NavigationMobileMenu;
