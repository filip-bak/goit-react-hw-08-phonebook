import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import UserListItem from 'Pages/Home/UserInfo/UserListItem';
import { useAuthUser } from 'hooks/useAuthUser';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/actions';

const UserInfo = props => {
  const dispatch = useDispatch();
  const { isUser } = useAuthUser();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <>
      {isUser.name !== null && isUser.email !== null && (
        <>
          <List
            sx={{
              width: '100%',
              maxWidth: 260,
            }}
          >
            <UserListItem
              divider={true}
              icon={<AccountCircleIcon color="primary" fontSize="large" />}
              label={isUser.name}
            />
            <UserListItem
              icon={<EmailIcon color="primary" fontSize="large" />}
              label={isUser.email}
            />
          </List>
          <Button
            onClick={handleClick}
            variant="contained"
            size="large"
            disableElevation
          >
            Logout
          </Button>
        </>
      )}
    </>
  );
};

UserInfo.propTypes = {};

export default UserInfo;
