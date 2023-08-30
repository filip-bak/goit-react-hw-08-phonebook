import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectisLoading,
} from 'redux/contacts/selectors';

export const useContactsState = () => {
  return {
    contacts: useSelector(selectContacts),
    isLoading: useSelector(selectisLoading),
    error: useSelector(selectError),
  };
};
