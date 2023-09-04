import { createReducer } from "@reduxjs/toolkit";
import { get_itineraries } from "../actions/itiniraryActions";

const initialState = {
    itineraries: []
}

const itineraryReducer = createReducer(initialState,
    (builder) => builder
        .addCase(get_itineraries.fulfilled, (state, action) => {

            return {
                ...state,
                itineraries: action.payload.itineraries
            }
        })
)

export default itineraryReducer;