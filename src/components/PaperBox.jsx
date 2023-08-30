import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@mui/material';

export const PaperStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
  maxWidth: '450px',
  minHeight: '380px',
  height: '70vh',
  marginInline: 'auto',
};

const PaperBox = ({ children }) => {
  return (
    <Paper sx={PaperStyles} elevation={3}>
      {children}
    </Paper>
  );
};

PaperBox.propTypes = {};

export default PaperBox;
