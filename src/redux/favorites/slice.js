import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { favoritesCampers: [] },
  reducers: {
    toggleFavorite(state, action) {
      //   console.log(state);
      //   console.log(action);
      const index = state.favoritesCampers.indexOf(action.payload);
      if (index !== -1) {
        state.favoritesCampers.splice(index, 1);
      } else {
        state.favoritesCampers.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
