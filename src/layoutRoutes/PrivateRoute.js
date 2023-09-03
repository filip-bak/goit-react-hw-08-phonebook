import React from 'react';
import PropTypes from 'prop-types';
import { useAuthUser } from 'hooks/useAuthUser';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogged, isRefreshing, isTokenExists } = useAuthUser();

  const redirectToRather =
    !isLogged && !isRefreshing && isTokenExists === false;

  return redirectToRather ? <Navigate to={redirectTo} /> : Component;
};

PrivateRoute.propTypes = {
  component: PropTypes.element,
  redirectTo: PropTypes.string,
};

export default PrivateRoute;
