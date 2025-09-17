import { configureStore } from "@reduxjs/toolkit";
import { showMovie } from "./ShowMovieReducer/showMovie";
import typeReducer from "../reduxToolkit/reducers/typeSlice";

export const store = configureStore({
  reducer: {
    [showMovie.reducerPath]: showMovie.reducer,
    typeToggle: typeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(showMovie.middleware),
});
