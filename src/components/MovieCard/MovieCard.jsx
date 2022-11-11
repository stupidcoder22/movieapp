import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  return (
    <div className="card-item bg-[#FFFFFF] cursor-pointer rounded-xl">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-inner h-[100%]">
          <div className="card-top h-[75%]">
            <img
              src={data.Poster}
              alt={data.Title}
              className=" w-full rounded-xl h-full"
            />
          </div>
          <div className="card-bottom text-center h-[25%]">
            <div className="card-info text-[black]">
              <h4 className="text-[22px] font-normal mb-[10px]">
                {data.Title}
              </h4>
              <p className="pb-5">{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
