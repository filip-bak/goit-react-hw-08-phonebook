import { useMediaQuery } from '@mui/material';
import NavigationMobileMenu from './NavigationMobileMenu';
import NavigationTabs from './NavigationTabs';

const NavigationBar = props => {
  const matches = useMediaQuery('(min-width:400px)');

  return (
    <nav>
      {matches ? (
        <NavigationTabs orientation="horizontal" />
      ) : (
        <NavigationMobileMenu>
          <NavigationTabs orientation="vertical" />
        </NavigationMobileMenu>
      )}
    </nav>
  );
};

NavigationBar.propTypes = {};

export default NavigationBar;
