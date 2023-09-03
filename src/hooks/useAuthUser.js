import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectToken,
  selectUser,
} from 'redux/auth/selectors';

export const useAuthUser = () => {
  return {
    isUser: useSelector(selectUser),
    isLogged: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    isTokenExists: useSelector(selectToken),
  };
};
