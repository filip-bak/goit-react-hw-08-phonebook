import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64d29462f8d60b1743623630.mockapi.io/api';

export const fetchContacts = createAsyncThunk(
  'contacts/FETCH_All',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      console.log(data);
      return data;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/ADD',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', { name, phone: number });
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
