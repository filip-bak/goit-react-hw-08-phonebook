import { useAuthUser } from 'hooks/useAuthUser';
import { UserGetStarted } from './UserGetStarted';
import UserList from './UserList';

const UserInfo = () => {
  const { isLogged } = useAuthUser();

  return <>{isLogged ? <UserList /> : <UserGetStarted />}</>;
};

export default UserInfo;
