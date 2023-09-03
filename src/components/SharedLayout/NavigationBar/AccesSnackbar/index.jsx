import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import PropTypes from 'prop-types';

const AuthSnackbar = ({ open, closeSnackBar }) => {
  return (
    <>
      <Snackbar
        sx={{ pointerEvents: 'none' }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={open}
        onClose={closeSnackBar}
        TransitionComponent={Slide}
        autoHideDuration={1500}
      >
        <Alert severity="info">Please log in to continue.</Alert>
      </Snackbar>
    </>
  );
};

AuthSnackbar.propTypes = {
  open: PropTypes.bool,
  closeSnackBar: PropTypes.func,
};

export default AuthSnackbar;
