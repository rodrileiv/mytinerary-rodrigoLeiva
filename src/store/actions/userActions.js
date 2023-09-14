import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import apiUrl from "../../../utils/apiUrl.js";
import axios from "axios";
import localStorageFn from "../../../utils/localStorage.js";

export const userSignUp = createAsyncThunk("userSignUp", async (userData) => {
  try {
    const res = await axios.post(apiUrl + "auth/signup", {
      ...userData,
    });
    return res.data;
  }
  catch (error) {
    console.log(error);
    return {};
  }
});

export const userSignIn = createAsyncThunk("userSignIn", async (userData) => {
  try {
    const res = await axios.post(apiUrl + "auth/signin", {
      ...userData,
    });
    return res.data;
  }
  catch (error) {
    console.log(error);
    return {};
  }
});

export const logInWithToken = createAsyncThunk("logInWithToken", async () => {
  try {
    const token = localStorageFn.getText("token");
    const res = await axios.get(apiUrl + "auth/token", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return res.data;
  }
  catch (error) {
    console.log(error);
    return {};
  }
});

export const userLogOut = createAction("userLogOut", () => {
  return {
    payload: "",
  };
});