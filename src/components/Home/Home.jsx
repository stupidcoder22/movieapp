import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/moviesSlice";

const Home = () => {
  const dispatch = useDispatch();

  const movie = "action";
  const tv = "friends";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movie));
    dispatch(fetchAsyncShows(tv));
  }, [dispatch]);
  return (
    <div>
      <div className="banner"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
