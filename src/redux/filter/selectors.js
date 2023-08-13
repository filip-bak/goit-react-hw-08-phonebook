import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [state => state.contacts.items, selectFilter],
  (contacts, filter) =>
    contacts.filter(contact => contact.name.toLowerCase().includes(filter))
);
