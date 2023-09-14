import { createReducer } from "@reduxjs/toolkit";
import {
  user_login,
  user_token,
  userSignupLoading,
  userSignupSuccess,
  userSignupFailure,
} from '../actions/userActions';

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(user_login.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(user_login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    })
    .addCase(user_login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    })
    .addCase(user_token, (state, action) => {
      state.user = action.payload.user;
    })
    .addCase(userSignupLoading, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(userSignupSuccess, (state) => {
      state.loading = false;
    })
    .addCase(userSignupFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    });
});

export default userReducer;