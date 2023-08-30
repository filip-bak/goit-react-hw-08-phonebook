import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, Typography, createTheme } from '@mui/material';

const theme = createTheme();
theme.typography.h2 = {
  fontSize: '3rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '3.5rem',
  },
};

const Logo = props => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography
          variant="h2"
          color="primary.main"
          component="span"
          {...props}
        >
          Phone
          <Typography
            component="span"
            variant="h2"
            color="secondary"
            fontWeight={600}
            textTransform={'capitalize'}
            {...props}
          >
            book
          </Typography>
        </Typography>
      </ThemeProvider>
    </>
  );
};

Logo.propTypes = {};

export default Logo;
