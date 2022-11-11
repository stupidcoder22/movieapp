import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import MovieDetail from "./components/MovieDetail/MovieDetail.jsx";
import Notfound from "./components/PageNotFound/Notfound.jsx";
// import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="mx-[40px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
