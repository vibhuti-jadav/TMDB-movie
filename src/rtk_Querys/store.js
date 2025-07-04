import { configureStore } from "@reduxjs/toolkit";
import { showMovie } from "./ShowMovieReducer/showMovie";

export const store = configureStore({
    reducer:{
        [showMovie.reducerPath]:showMovie.reducer
    },
    middleware:(gt)=> gt().concat(showMovie.middleware)
})