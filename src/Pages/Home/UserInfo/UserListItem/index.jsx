import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const UserListItem = ({ divider = false, icon: Icon, label }) => {
  const userInfoProps = {
    component: 'p',
    variant: 'h6',
    color: 'secondary',
  };

  return (
    <ListItem divider={divider}>
      <ListItemIcon>
        {Icon}
        {/* <AccountCircleIcon color="primary" fontSize="large" /> */}
      </ListItemIcon>
      <ListItemText
        primary={label}
        primaryTypographyProps={userInfoProps}
        color={'secondary'}
      />
    </ListItem>
  );
};

UserListItem.propTypes = {};

export default UserListItem;
