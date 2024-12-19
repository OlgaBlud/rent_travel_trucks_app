import { createSlice } from "@reduxjs/toolkit";
import { apiGetAllCampers } from "./operations";
const INITIAL_STATE = {
  allCampers: [],
  isLoading: false,
  error: null,
};
const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(apiGetAllCampers.pending, handlePending)
      .addCase(apiGetAllCampers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.allCampers = payload.items;
      })
      .addCase(apiGetAllCampers.rejected, handleRejected),
});
export const campersReducer = campersSlice.reducer;