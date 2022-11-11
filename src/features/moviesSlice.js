import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiKey } from "../common/Api/key";

const initialState = {
  movies: {},
  shows: {},
  movieorshowbyid: {},
};

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncmovies",
  async (term) => {
    // const movietext = "lord";
    const resp = await fetch(
      `https://www.omdbapi.com/?apiKey=${apiKey}&s=${term}&type=movie`
    );
    const response = await resp.json();
    return response;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncshows",
  async (term) => {
    // const seriestext = "Friends";
    const resp = await fetch(
      `https://www.omdbapi.com/?apiKey=${apiKey}&s=${term}&type=series`
    );
    const response = await resp.json();
    return response;
  }
);

export const fetchAsyncMoviesbyID = createAsyncThunk(
  "movies/fetchAsyncmoviesbyid",
  async (id) => {
    const resp = await fetch(
      `https://www.omdbapi.com/?apiKey=${apiKey}&i=${id}&plot=full`
    );
    const response = await resp.json();
    return response;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // addMovies: (state, { payload }) => {
    //   state.movies = payload;
    // },

    removecurrentmovieorshow: (state) => {
      state.movieorshowbyid = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      // console.log("successfully", payload);
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      // console.log("successfully", payload);
      return { ...state, shows: payload };
    },
    [fetchAsyncMoviesbyID.fulfilled]: (state, { payload }) => {
      // console.log("successfully by id", payload);
      return { ...state, movieorshowbyid: payload };
    },
  },
});

export const { removecurrentmovieorshow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllTV = (state) => state.movies.shows;
export const movieortvbyid = (state) => state.movies.movieorshowbyid;
export default movieSlice.reducer;
