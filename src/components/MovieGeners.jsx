// import React, { useState } from 'react'
// import { showMovie } from '../rtk_Querys/ShowMovieReducer/showMovie';

// const MovieGeners = ({ setList, list }) => {

//   const { data } = showMovie.useAllMovieQuery({ endpoint: "genre/movie/list" });

//   // console.log("list:-", data)   

//   console.log(list)
//   function isGeners(id) {
//     return list.includes(id)
//   }

//   function handleGeners(id) {
//     if (list.includes(id)) {
//       let newList = list.filter((e) => e != id)
//       setList(newList)
//     }
//     else {
//       setList([...list, id])
//     }
//   }

//   isGeners(99)

//   return (
//     <>
//       <div>
//         {
//           data?.genres?.map((ele) => (
//             <button key={ele.id} onClick={() => handleGeners(ele.id)} className={`border border-amber-500 text-amber-200  text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm  ${isGeners(ele.id) ? `bg-amber-500 text-white` : `bg-transparent`} `}>{ele.name}</button>
//           ))}
//       </div>
//     </>
//   )
// }
// export default MovieGeners


import React from 'react';
import { showMovie } from '../rtk_Querys/ShowMovieReducer/showMovie';

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
  Western: "🤠"
};

const MovieGeners = ({ setList, list }) => {
  const { data } = showMovie.useAllMovieQuery({ endpoint: "genre/movie/list" });

  const isSelected = (id) => list.includes(id);

  const handleGenreClick = (id) => {
    if (isSelected(id)) {
      setList(list.filter((e) => e !== id));
    } else {
      setList([...list, id]);
    }
  };

  const clearAll = () => {
    setList([]);
  };

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
              ${isSelected(genre.id)
                ? "bg-yellow-500 text-black border-yellow-400 shadow-md hover:bg-yellow-400"
                : "bg-gray-800 text-white border-gray-700 hover:bg-gray-700 hover:text-yellow-300"}`}
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
