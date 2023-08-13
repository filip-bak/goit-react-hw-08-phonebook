import { createAction } from '@reduxjs/toolkit';

export const setFilter = createAction('filter/SET', id => {
  return {
    payload: id.toLowerCase(),
  };
});
