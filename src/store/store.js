import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./reducers/cityReducers";
import itineraryReducer from "./reducers/itiniraryReducers";
import userReducers from "./reducers/userReducers";

export const store = configureStore({
    reducer:{
        userReducers: userReducers,
        cityReducer: cityReducer,
        itineraryReducer: itineraryReducer
    }
})