import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Discover from "./components/Discover";
import { Route, Routes } from "react-router";
import EachDiscover from "./components/Eachdiscover";
import Search from "./components/Search";
import TvDetail from "./components/TvDetail";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/discover/:type/:id" element={<EachDiscover />} />
        <Route path="/tv/:id" element={<TvDetail />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/search" element={<Search />} />
      </Routes>

   
    </>
  );
}

export default App;



