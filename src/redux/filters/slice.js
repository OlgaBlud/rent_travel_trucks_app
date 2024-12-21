import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload;
    },
    resetFilters(state) {
      state.filters = initialState.filters;
    },
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
