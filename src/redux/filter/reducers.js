import { setFilter } from './actions';

const { createReducer } = require('@reduxjs/toolkit');

const initialState = '';

export const filterReducer = createReducer(initialState, {
  [setFilter]: (_, action) => {
    return action.payload;
  },
});
