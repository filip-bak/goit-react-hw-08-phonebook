import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { PropTypes } from 'prop-types';

const UserListItem = ({ divider = false, icon: Icon, label }) => {
  const userInfoProps = {
    component: 'p',
    variant: 'h6',
    color: 'secondary',
  };

  return (
    <ListItem divider={divider}>
      <ListItemIcon>{Icon}</ListItemIcon>
      <ListItemText
        primary={label}
        primaryTypographyProps={userInfoProps}
        color={'secondary'}
      />
    </ListItem>
  );
};
UserListItem.propTypes = {
  divider: PropTypes.bool,
  icon: PropTypes.element,
  label: PropTypes.string,
};

export default UserListItem;
