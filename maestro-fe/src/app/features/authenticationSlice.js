import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { _signin } from "../../services/resources";
import { getItem, setItem } from "../../services/token";

export const getTokenFromStorage = createAsyncThunk(
  "getTokenFromStorage",
  async () => {
    let token = null;

    try {
      token = await getItem("@maestro-auth");
      console.log("[getTokenFromStorage] Trying to get token", token);
    } catch (err) {
      console.log("[getTokenFromStorage] Cant get token", err);
    }

    return { token };
  }
);

export const signin = createAsyncThunk("signin", async (params) => {
  let { email, password } = params;
  try {
    const response = (await _signin(email, password)).data;
    return response.token;
  } catch (err) {
    console.log(err);
    return err;
  }
});

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    // User token
    token: null,
    // Returns true if user is authenticated
    isUserAuthenticated: null,
    // Returns true if user has a brand
    error: null,
  },
  reducers: {
    logOut: (state) => {
      state.token = null;
      state.isUserAuthenticated = false;
      localStorage.removeItem("@maestro-auth");
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as neede
    [getTokenFromStorage.fulfilled]: (state, { payload }) => {
      // If there is no token, then user is not authenticated
      console.log("[getTokenFromStorage.fulfilled]", payload);

      if (payload.token === null) {
        state.isUserAuthenticated = false;
        return;
      }

      // if there is a token, then user gets authenticated
      state.isUserAuthenticated = true;
      state.token = payload.token;
    },
    [signin.fulfilled]: (state, { payload }) => {
      // If there is no token, then user is not authenticated
      console.log("[signin.fulfilled]", payload);
      state.token = payload;

      setItem("@maestro-auth", payload);
    },
    [signin.rejected]: (state, { payload }) => {
      // If there is no token, then user is not authenticated
      console.log("[signin.rejected]", payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { logOut } = authenticationSlice.actions;

export default authenticationSlice.reducer;
