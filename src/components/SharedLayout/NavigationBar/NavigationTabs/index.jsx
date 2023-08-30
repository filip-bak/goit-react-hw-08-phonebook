import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';

const NavigationTabs = props => {
  const [tabValue, setTabValue] = React.useState(0);

  const location = useLocation();

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Tabs
      sx={{
        mb: 2,
        maxWidth: '385px',
        mx: 'auto',
      }}
      value={location.pathname}
      onChange={handleChange}
      {...props}
    >
      <Tab component={NavLink} value={'/'} to="/" label="Home" />
      <Tab
        component={NavLink}
        value={'/contacts'}
        to="/contacts"
        label="Contacts"
      />
      <Tab component={NavLink} value={'/login'} to="/login" label="Login" />
      <Tab
        component={NavLink}
        value={'/register'}
        to="/register"
        label="Register"
      />
    </Tabs>
  );
};

NavigationTabs.propTypes = {};

export default NavigationTabs;
