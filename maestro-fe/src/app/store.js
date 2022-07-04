/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import authenticationSlice from './features/authenticationSlice';

export default configureStore({
  reducer: {
    auth: authenticationSlice,
  },
});
