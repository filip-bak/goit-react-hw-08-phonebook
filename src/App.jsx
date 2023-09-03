import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import ContactsPage from 'Pages/ContactsPage';
import Home from 'Pages/Home';
import LoginPage from 'Pages/LoginPage';
import PageNotFound from 'Pages/PageNotFound';
import RegisterPage from 'Pages/RegisterPage';
import { Spinner } from 'components/Spinner';
import { useAuthUser } from 'hooks/useAuthUser';
import PrivateRoute from 'layoutRoutes/PrivateRoute';
import { RestrictRoute } from 'layoutRoutes/RestrictRoute';
import { refreshUser } from 'redux/auth/actions';
import SharedLayout from './components/SharedLayout';

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuthUser();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing)
    return <Spinner loading={isRefreshing} left={'50%'} top={'50%'} />;

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictRoute component={<RegisterPage />} redirectTo="/" />
          }
        />
        <Route
          path="/login"
          element={<RestrictRoute component={<LoginPage />} redirectTo="/" />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
