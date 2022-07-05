import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getItem } from '../../services/token';

export const getTokenFromStorage = createAsyncThunk(
  'getTokenFromStorage',
  async () => {
    let token = null;

    try {
      token = await getItem('@maestro-auth');
      console.log('[getTokenFromStorage] Trying to get token', token);
    } catch (err) {
      console.log('[getTokenFromStorage] Cant get token', err);
    }

    return { token };
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
  },
  reducers: {
    logOut: (state) => {
      state.token = null;
      state.isUserAuthenticated = false;
      localStorage.removeItem('@maestro-auth');
    },
    setCompletedProfile: (state, { payload }) => {
      state.hasCompletedProfile = payload;
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

    },
    [getTokenFromStorage.rejected]: (state, { payload }) => {
      // If there is no token, then user is not authenticated
      state.isUserAuthenticated = false;
      console.log('[getTokenFromStorage.rejected]', payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { logOut } = authenticationSlice.actions;

export default authenticationSlice.reducer;
