import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMoviesbyID,
  movieortvbyid,
  removecurrentmovieorshow,
} from "../../features/moviesSlice";

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const data = useSelector(movieortvbyid);

  useEffect(() => {
    dispatch(fetchAsyncMoviesbyID(id));
    return () => {
      dispatch(removecurrentmovieorshow());
    };
  }, [dispatch, id]);

  return (
    <div className="movie-section flex justify-evenly py-[40px] text-[black] space-x-12">
      {Object.keys(data || {}).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left w-[80%]">
            <div className="movie-title text-[40px] text-[black]">
              {data?.Title}
            </div>
            <div className="movie-rating pl-[3px] mt-[20px] text-[#F9A11B] flex">
              <span>
                IMDB Rating <i className="fa fa-star"></i> : {data?.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                {data?.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> : {data?.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i> : {data?.Year}
              </span>
            </div>
            <div className="movie-plot mt-[20px] leading-[1.8rem]">
              {data?.Plot}
            </div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data?.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data?.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{data?.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data?.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data?.Awards}</span>
              </div>
            </div>
          </div>
          {/* border-2 border-red-900" */}
          <div className="section-right  w-[40%]  flex items-center">
            <img src={data?.Poster} alt={data?.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
