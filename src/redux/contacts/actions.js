import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/FETCH_All',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/ADD',
  async (contactData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contactData);
      return data;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/REMOVE',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);

      return data;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
