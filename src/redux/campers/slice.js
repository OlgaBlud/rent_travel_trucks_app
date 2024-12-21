import { createSlice } from "@reduxjs/toolkit";
import { apiGetAllCampers, apiGetCamperById } from "./operations";
const INITIAL_STATE = {
  allCampers: [],
  isLoading: false,
  error: null,
  camperDetails: null,
  page: 1,
  total: 0,
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
  reducers: {
    incrementPage(state) {
      state.page += 1;
    },
    resetCampers(state) {
      state.allCampers = [];
      state.page = 1;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(apiGetAllCampers.pending, handlePending)
      .addCase(apiGetAllCampers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const newCampers = payload.items;
        const uniqueCampers = [
          ...state.allCampers,
          ...newCampers.filter(
            (newCamper) =>
              !state.allCampers.some((camper) => camper.id === newCamper.id)
          ),
        ];
        state.allCampers = uniqueCampers;
        state.total = payload.total;
      })
      .addCase(apiGetAllCampers.rejected, handleRejected)
      .addCase(apiGetCamperById.pending, handlePending)
      .addCase(apiGetCamperById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        // console.log(payload);
        state.camperDetails = payload;
      })
      .addCase(apiGetCamperById.rejected, handleRejected),
});

export const { incrementPage, resetCampers } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
