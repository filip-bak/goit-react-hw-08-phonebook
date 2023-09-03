import { Paper } from '@mui/material';
import PropTypes from 'prop-types';

export const PaperStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
  maxWidth: '450px',
  minHeight: '300px',
  py: 4,
  px: 2,
  marginInline: 'auto',
};

const PaperBox = ({ children }) => {
  return (
    <Paper sx={PaperStyles} elevation={3}>
      {children}
    </Paper>
  );
};

PaperBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PaperBox;
