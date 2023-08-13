import { createSlice } from '@reduxjs/toolkit';
import {
  handlePending,
  handleReject,
  handleFulfilled,
} from 'redux/utils/fetchStatus';
import { addContact, fetchContacts, removeContact } from './actions';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled]: (state, action) => {
      handleFulfilled(state);
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleReject,

    [addContact.pending]: handlePending,
    [addContact.fulfilled]: (state, action) => {
      handleFulfilled(state);
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleReject,
    [removeContact.pending]: handlePending,
    [removeContact.fulfilled]: (state, action) => {
      handleFulfilled(state);

      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [removeContact.rejected]: handleReject,
  },
});

export const contactsReducer = contactsSlice.reducer;
