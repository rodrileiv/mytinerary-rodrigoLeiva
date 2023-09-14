import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from 'sweetalert2'

export const user_login = createAsyncThunk("user_login", async (obj, { dispatch }) => {
  try {
    dispatch(userLoading());

    const { data } = await axios.post("http://localhost:7000/api/auth/signin", obj.data);
    localStorage.setItem("token", data.response.token);
    localStorage.setItem("user", JSON.stringify(data.response.user));

    dispatch(userLoginSuccess(data.response.user, data.response.token));
    
    Swal.fire({
      title: 'Success!',
      text: 'Login successful'
    })

    return {
      user: data.response.user,
      token: data.response.token,
    };
  } catch (error) {
    console.error(error);

    Swal.fire({
      title: 'Error!',
      text: error.response ? error.response.data.message : 'An error occurred'
    })
    return {
      user: null,
    };
  }
});


export const user_signup = createAsyncThunk("user_signup", async (userData, { dispatch }) => {
  try {
    const { data } = await axios.post("http://localhost:7000/api/auth/signup", userData);
    console.log(data);

    Swal.fire({
      title: 'Success!',
      text: 'Signup successful'
    })

    return data;
  } catch (error) {

    console.error(error);

    Swal.fire({
      title: 'Error!',
      text: error.response ? error.response.data.message : 'An error occurred'
    })
    return {
      error: error.message,
    };
  }
});

export const user_token = createAction("user_token", (user) => ({
    payload: {
      user,
    },
  }));

export const userLoading = createAction("user_loading");
export const userLoginSuccess = createAction("user_login_success", (user, token) => ({
  payload: {
    user,
    token,
  },
}));
export const userLoginFailure = createAction("user_login_failure", (error) => ({
  payload: {
    error,
  },
}));

export const userSignupLoading = createAction("user_signup_loading");
export const userSignupSuccess = createAction("user_signup_success");
export const userSignupFailure = createAction("user_signup_failure", (error) => ({
  payload: {
    error,
  },
}));