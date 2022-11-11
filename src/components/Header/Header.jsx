import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/moviesSlice";

const Header = () => {
  const [inputchange, setinputchange] = useState("");
  const dispatch = useDispatch();

  const inputhandler = (e) => {
    setinputchange(e.target.value);
  };

  const submithandle = () => {
    if (inputchange === "") {
      return alert("Please enter movie name");
    }
    dispatch(fetchAsyncMovies(inputchange));
    dispatch(fetchAsyncShows(inputchange));
    setinputchange("");
  };

  return (
    <div className="bg-[#2C2B2F] h-[72px] px-[40px] flex items-center justify-between">
      <div className="text-[30px] font-semibold text-[#F9A11B]">
        <Link to="/">Movie Mania</Link>
      </div>

      <div className="search space-x-4">
        <input
          type="text"
          placeholder="search movie"
          className="rounded-md outline-none pl-4 py-1 placeholder:pl-3"
          onChange={inputhandler}
          value={inputchange}
        />
        <button
          className="text-white bg-[#F9A11B] py-1 rounded-md px-2 outline-none"
          onClick={submithandle}
        >
          search
        </button>
      </div>
    </div>
  );
};

export default Header;
