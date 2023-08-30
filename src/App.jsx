import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/actions';
import { Route, Routes } from 'react-router-dom';

import PageNotFound from 'Pages/PageNotFound';
import Home from 'Pages/Home';
import SharedLayout from './components/SharedLayout';
import RegisterPage from 'Pages/RegisterPage';
import LoginPage from 'Pages/LoginPage';
import ContactsPage from 'Pages/ContactsPage';
import { refreshUser } from 'redux/auth/actions';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
