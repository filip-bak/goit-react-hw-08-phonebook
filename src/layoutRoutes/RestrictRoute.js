import { useAuthUser } from 'hooks/useAuthUser';
import { Navigate } from 'react-router-dom';

export const RestrictRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogged, isRefreshing } = useAuthUser();

  return isLogged && !isRefreshing ? <Navigate to={redirectTo} /> : Component;
};
