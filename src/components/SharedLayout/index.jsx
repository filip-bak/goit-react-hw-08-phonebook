import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import { Box } from '@mui/material';

const boxStyles = { display: { xs: 'flex', sm: 'block' } };

const SharedLayout = () => {
  return (
    <Box>
      <header>
        <NavigationBar />
      </header>
      <main className="wrapper">
        <Outlet />
      </main>
    </Box>
  );
};

SharedLayout.propTypes = {};

export default SharedLayout;
