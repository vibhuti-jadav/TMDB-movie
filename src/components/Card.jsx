import React from "react";
import { Link } from "react-router-dom";

const Card = ({ ele, type }) => {
  const movieName = ele.title || ele.name;
  const posterPath = `https://image.tmdb.org/t/p/w500${ele.poster_path}`;

  return (
    <div className="relative group bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
      {/* Movie Poster */}
      <img
        className="w-full h-80 object-cover transition-opacity duration-300 group-hover:opacity-30"
        src={posterPath}
        alt={movieName}
      />

      {/* Hover Content */}
      <div className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col justify-end">
        <h5 className="text-xl font-semibold tracking-wide mb-2">
          {movieName}
        </h5>
        <p className="text-sm text-gray-300 line-clamp-3 mb-3">
          {ele.overview}
        </p>
        <div className="flex justify-between items-center text-sm">
          <span className="text-blue-400 font-bold">
            ⭐ {ele.vote_average.toFixed(1)}
          </span>
          <span className="text-gray-400">
            {ele.release_date || ele.first_air_date}
          </span>
        </div>

        <Link
          to={`/discover/${type}/${ele.id}`}
          className="mt-3 inline-block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
