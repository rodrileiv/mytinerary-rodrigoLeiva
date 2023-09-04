import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./reducers/cityReducers";
import itineraryReducer from "./reducers/itiniraryReducers";

export const store = configureStore({
    reducer:{
        cityReducer: cityReducer,
        itineraryReducer: itineraryReducer
    }
})