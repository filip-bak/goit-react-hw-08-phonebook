import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavigationBar from './NavigationBar';

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

export default SharedLayout;
