/* eslint-disable import/no-cycle */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getBrandInfo } from '../../services/resources';
import { getItem } from '../../services/token';

export const getTokenFromStorage = createAsyncThunk(
  'getTokenFromStorage',
  async () => {
    let token = null;

    try {
      token = await getItem('@pinfluencer-auth');
      console.log('[getTokenFromStorage] Trying to get token', token);
    } catch (err) {
      console.log('[getTokenFromStorage] Cant get token', err);
    }

    return { token };
  },
);

export const readProfile = createAsyncThunk(
  'readProfile',
  async () => {
    let hasCompletedProfile = null;

    try {
      hasCompletedProfile = await getBrandInfo();
      console.log('getTokenFromStorage] CAN get profile', hasCompletedProfile);
    } catch (err) {
      console.log('[getTokenFromStorage] Cant get profile', err);
    }

    return { hasCompletedProfile };
  },
);

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    // User token
    token: null,
    // Returns true if user is authenticated
    isUserAuthenticated: null,
    // Returns true if user has a brand
    hasCompletedProfile: null,
    // Returns the user's brand
    brand: null,
    // If token includes an email, store it in state
    decodedEmail: null,
    // Returns brand image
    brandImage: null,
    isBrandLoaded: false,
  },
  reducers: {
    logOut: (state) => {
      state.token = null;
      state.isUserAuthenticated = false;
      localStorage.removeItem('@pinfluencer-auth');
    },
    setCompletedProfile: (state, { payload }) => {
      state.hasCompletedProfile = payload;
    },
    setImage: (state, { payload }) => {
      state.brandImage = `${process.env.REACT_APP_S3_URL}${payload.hasCompletedProfile.id}/${payload}`;
      console.log('changing from reducer', payload);
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as neede
    [getTokenFromStorage.fulfilled]: (state, { payload }) => {
      // If there is no token, then user is not authenticated
      console.log('[getTokenFromStorage.fulfilled]', payload);

      if (payload.token === null) {
        state.isUserAuthenticated = false;
        return;
      }

      // if there is a token, then user gets authenticated
      state.isUserAuthenticated = true;
      state.token = payload.token;

      // Check for email in token
      if (payload.decodedEmail) {
        state.decodedEmail = payload.decodedEmail;
      }
    },
    [getTokenFromStorage.rejected]: (state, { payload }) => {
      // If there is no token, then user is not authenticated
      state.isUserAuthenticated = false;
      console.log('[getTokenFromStorage.rejected]', payload);
    },
    [readProfile.fulfilled]: (state, { payload }) => {
      // check if user is authenticated (e.g. token expired)
      console.log('readprofile fullfiled');
      if (state.token) {
        const decodedEmail = jwt_decode(state.token);

        console.log('DECODED', decodedEmail?.email);

        state.decodedEmail = decodedEmail?.email;

        if (payload.hasCompletedProfile === 404) {
          state.hasCompletedProfile = false;
          state.isBrandLoaded = true;
          return;
        }

        state.hasCompletedProfile = true;
        state.brand = payload.hasCompletedProfile;
        state.brandImage = `${process.env.REACT_APP_S3_URL}${payload.hasCompletedProfile.id}/${payload.hasCompletedProfile.image}`;
        console.log('brand image', state.brandImage);
        state.isBrandLoaded = true;
      }
    },
    [readProfile.rejected]: (state, { payload }) => {
      // check if user is authenticated (e.g. token expired)
      console.log('rejected read profile', payload, state);
    },
  },
});

// Action creators are generated for each case reducer function
export const { logOut, setCompletedProfile, setImage } = authenticationSlice.actions;

export default authenticationSlice.reducer;
