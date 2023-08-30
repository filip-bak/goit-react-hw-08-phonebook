import axios from 'axios';

const { createAsyncThunk } = require('@reduxjs/toolkit');

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearToken = token => {
  axios.defaults.headers.common.Authorization = ``;
};

export const register = createAsyncThunk(
  'auth/REGISTER',
  async (registerData, thunkApi) => {
    try {
      const res = await axios.post('/users/signup', registerData);
      setToken(res.data.token);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const login = createAsyncThunk(
  'auth/LOGIN',
  async (loginData, thunkApi) => {
    try {
      const res = await axios.post('/users/login', loginData);
      setToken(res.data.token);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const refreshUser = createAsyncThunk(
  'auth/REFRESH_USER',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;

    setToken(token);

    try {
      const res = await axios.get('/users/current');
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
export const logout = createAsyncThunk('auth/LOGOUT', async (_, thunkApi) => {
  try {
    const res = await axios.post('/users/logout');
    clearToken();
    return res.data;
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});
