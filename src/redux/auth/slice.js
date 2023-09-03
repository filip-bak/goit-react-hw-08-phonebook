import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './actions';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetError: state => {
      state.isError = null;
    },
  },
  extraReducers: {
    [register.pending]: state => {
      state.isError = null;
    },
    [register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected]: (state, action) => {
      state.isError = action.payload;
    },
    [login.pending]: state => {
      state.isError = null;
    },
    [login.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.rejected]: (state, action) => {
      state.isError = action.payload;
    },
    [logout.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending]: state => {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isRefreshing = false;
      state.isLoggedIn = true;
    },
    [refreshUser.rejected]: state => {
      state.isRefreshing = false;
    },
  },
});

export const { resetError } = authSlice.actions;
export const authReducer = authSlice.reducer;
