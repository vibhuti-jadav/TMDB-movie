import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const showMovie = createApi({
  reducerPath: "showmovie",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (build) => ({

    allMovie: build.query({
      query: ({ endpoint, page = 1, lang = "", list = [] }) => {
        const genreParam = list.length ? `&with_genres=${list.join(",")}` : "";
        const langParam = lang ? `&with_original_language=${lang}` : "";
        return `/${endpoint}?api_key=${API_KEY}&page=${page}${langParam}${genreParam}`;
      },
    }),
    movieGenres: build.query({
      query: () => `/genre/movie/list?api_key=${API_KEY}`,
    }),
    movieVideo: build.query({
      query: ({ id, type }) =>
        `/${type}/${id}/videos?api_key=${API_KEY}&language=en-US`,
    }),

    movieDetail: build.query({
      query: ({ id, type }) =>
        `/${type}/${id}?api_key=${API_KEY}&language=en-US`,
    }),
  }),
});
