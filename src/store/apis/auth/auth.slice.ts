import { createSlice } from "@reduxjs/toolkit";

import { authApi } from "./auth.api";
import { AuthState } from "./auth.types";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: { user: null } as AuthState,
  reducers: {
    resetUserInfo: state => {
      state.user = null;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.getMe.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
      },
    );
  },
});

export const { resetUserInfo } = authSlice.actions;
