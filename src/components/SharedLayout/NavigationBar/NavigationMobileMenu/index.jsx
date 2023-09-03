import MenuIcon from '@mui/icons-material/Menu';
import { Button, Drawer } from '@mui/material';
import React from 'react';
import { PropTypes } from 'prop-types';

const NavigationMobileMenu = ({ children }) => {
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
      <Button
        variant="text"
        sx={{ height: '48px', ml: 2.5 }}
        onClick={toggleDrawer}
      >
        <MenuIcon fontSize="large" />
      </Button>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
        {children}
      </Drawer>
    </>
  );
};

NavigationMobileMenu.propTypes = {
  children: PropTypes.node,
};

export default NavigationMobileMenu;
