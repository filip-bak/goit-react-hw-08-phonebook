import { useMediaQuery } from '@mui/material';
import NavigationMobileMenu from './NavigationMobileMenu';
import NavigationTabs from './NavigationTabs';

import { useState } from 'react';
import AuthSnackbar from './AccesSnackbar';

const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  const openSnackBar = () => {
    setOpen(true);
  };

  const closeSnackBar = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const matches = useMediaQuery('(min-width:400px)');

  return (
    <>
      <nav>
        {matches ? (
          <NavigationTabs
            orientation="horizontal"
            openSnackbar={openSnackBar}
          />
        ) : (
          <NavigationMobileMenu>
            <NavigationTabs
              orientation="vertical"
              openSnackbar={openSnackBar}
            />
          </NavigationMobileMenu>
        )}
      </nav>
      <AuthSnackbar
        open={open}
        setOpen={setOpen}
        closeSnackBar={closeSnackBar}
      />
    </>
  );
};

export default NavigationBar;
