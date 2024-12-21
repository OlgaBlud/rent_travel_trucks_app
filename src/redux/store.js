import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campers/slice";
import { favoritesReducer } from "./favorites/slice";
import { filtersReducer } from "./filters/slice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorites: favoritesReducer,
    filters: filtersReducer,
  },
});
