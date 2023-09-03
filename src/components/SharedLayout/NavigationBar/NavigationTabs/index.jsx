import { Tab, Tabs } from '@mui/material';
import { useAuthUser } from 'hooks/useAuthUser';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

const NavigationTabs = ({ orientation, openSnackbar }) => {
  const { isLogged } = useAuthUser();

  const location = useLocation();

  const checkPage = (pathname, isLogged) => {
    const pages = {
      '/': pathname,
      '/contacts': pathname,
      '/login': pathname,
      '/register': pathname,
    };

    // redirect Tabs if user isLogged
    if (isLogged) {
      if (pathname === '/login' || pathname === '/register') return '/';
    }

    return pages[pathname] || '/';
  };

  const tabsData = [
    { label: 'Home', href: '/' },
    {
      label: 'Contacts',
      onclick: openSnackbar,
      href: '/contacts',
    },
    { label: 'Login', href: '/login' },
    { label: 'Register', href: '/register' },
  ];
  return (
    <>
      <Tabs
        sx={{
          mb: 2,
          maxWidth: '385px',
          mx: 'auto',
        }}
        centered
        value={checkPage(location.pathname, isLogged)}
        orientation={orientation}
      >
        {tabsData
          .filter((_, i) => (isLogged ? i < 2 : true))
          .map(({ label, href, onclick }) => (
            <Tab
              key={`${label} ${href}`}
              component={NavLink}
              onClick={!isLogged ? onclick : null}
              value={href}
              to={href}
              label={label}
            />
          ))}
      </Tabs>
    </>
  );
};

NavigationTabs.propTypes = {
  orientation: PropTypes.string,
  openSnackbar: PropTypes.func,
};

export default NavigationTabs;
