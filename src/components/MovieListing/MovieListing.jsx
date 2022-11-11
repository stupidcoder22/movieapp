import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllTV } from "../../features/moviesSlice";
import MovieCard from "../MovieCard/MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const tv = useSelector(getAllTV);
  let rendermovies = "";
  rendermovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="">
        <h3>movies.Error</h3>
      </div>
    );

  let rendershows = "";
  rendershows =
    tv.Response === "True" ? (
      tv.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="">
        <h3>movies.Error</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list my-[20px]">
        <h2 className="text-[black] mb-[10px] text-2xl font-bold">Movies</h2>
        <div className="movie-container grid grid-cols-5 gap-6">
          {rendermovies}
        </div>
      </div>

      <div className="show-list my-[20px]">
        <h2 className="text-[black] mb-[10px] text-2xl font-bold">TV SHOWS</h2>
        <div className="movie-container grid grid-cols-5 gap-6">
          {rendershows}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
