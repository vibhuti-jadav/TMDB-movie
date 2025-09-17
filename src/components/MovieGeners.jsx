import React from "react";
import { showMovie } from "../rtk_Querys/ShowMovieReducer/showMovie";

const genreIcons = {
  Action: "🎬",
  Adventure: "🧭",
  Animation: "🎨",
  Comedy: "😂",
  Crime: "🕵️",
  Documentary: "🎥",
  Drama: "🎭",
  Family: "👨‍👩‍👧",
  Fantasy: "🧚",
  History: "📜",
  Horror: "😱",
  Music: "🎵",
  Mystery: "🕵️‍♂️",
  Romance: "❤️",
  "Science Fiction": "👽",
  TV: "📺",
  Thriller: "🔪",
  War: "⚔️",
  Western: "🤠",
};

const MovieGeners = ({ setList, list }) => {
  const { data, isLoading, error } = showMovie.useMovieGenresQuery(); // ✅ use the new one

  const isSelected = (id) => list.includes(id);

  const handleGenreClick = (id) => {
    if (isSelected(id)) {
      setList(list.filter((e) => e !== id));
    } else {
      setList([...list, id]);
    }
  };

  const clearAll = () => setList([]);

  if (isLoading) return <p className="text-white px-4">Loading genres...</p>;
  if (error) return <p className="text-red-400 px-4">Failed to load genres.</p>;

  return (
    <div className="px-4 py-3">
      <div className="flex flex-wrap gap-3 items-center">
        {list.length > 0 && (
          <button
            onClick={clearAll}
            className="text-sm text-red-400 hover:text-red-300 underline transition duration-200"
          >
            Clear All
          </button>
        )}
        {data?.genres?.map((genre) => (
          <button
            key={genre.id}
            onClick={() => handleGenreClick(genre.id)}
            className={`px-4 py-1.5 text-sm font-medium rounded-full border transition-all duration-300 ease-in-out flex items-center gap-2
              ${
                isSelected(genre.id)
                  ? "bg-yellow-500 text-black border-yellow-400 shadow-md hover:bg-yellow-400"
                  : "bg-gray-800 text-white border-gray-700 hover:bg-gray-700 hover:text-yellow-300"
              }`}
          >
            <span>{genreIcons[genre.name] || "🎞️"}</span>
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MovieGeners;
