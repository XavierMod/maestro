/* eslint-disable import/no-cycle */
import axios from 'axios';
import { logOut } from '../app/features/authenticationSlice';
import store from '../app/store';

const instance = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.REACT_APP_API_URL,
});

// request header
instance.interceptors.request.use(async (config) => {
  const token = await localStorage.getItem('@pinfluencer-auth');
  if (token !== null || token !== undefined) {
    // eslint-disable-next-line no-param-reassign
    config.headers.common = { Authorization: `Bearer ${token}` };
  }
  return config;
}, (error) => Promise.reject(error));

instance.interceptors.response.use(undefined, (err) => {
  const error = err.response.status;
  if (error === 401) {
    console.log('[401] Unauthorised');
    store?.dispatch(logOut());
  }
});

export default instance;
