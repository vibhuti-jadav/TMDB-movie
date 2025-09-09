// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { showMovie } from '../rtk_Querys/ShowMovieReducer/showMovie';

// const MovieDetail = () => {
//   const { id } = useParams();
//   const { data, isLoading, error } = showMovie.useMovieDetailQuery({ id, type: 'movie' });

//   if (isLoading) return <p className="text-white">Loading movie...</p>;
//   if (error || !data) return <p className="text-red-500">Error loading movie.</p>;

//   return (
//     <div className="p-6 text-white">
//       <h1 className="text-3xl font-bold">{data.title}</h1>
//       <p className="mt-4">{data.overview}</p>
//       <img
//         src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
//         alt={data.title}
//         className="mt-4 w-64 rounded"
//       />
//     </div>
//   );
// };

// export default MovieDetail;


import React from 'react';
import { useParams } from 'react-router-dom';
import { showMovie } from '../rtk_Querys/ShowMovieReducer/showMovie';

const MovieDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = showMovie.useMovieDetailQuery({ id, type: 'movie' });

  if (isLoading) return <p className="text-white text-center mt-20 text-xl">Loading movie...</p>;
  if (error || !data) return <p className="text-red-500 text-center mt-20 text-xl">Error loading movie.</p>;

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-900 rounded-xl shadow-lg mt-12 text-white flex flex-col md:flex-row gap-10">
      {/* Poster Section */}
      <div className="flex-shrink-0 w-full md:w-1/3 rounded-lg overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
        <img
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          alt={data.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info Section */}
      <div className="flex flex-col justify-between w-full md:w-2/3">
        <div>
          <h1 className="text-4xl font-extrabold mb-4">{data.title}</h1>
          <p className="text-gray-300 mb-6 leading-relaxed">{data.overview}</p>
        </div>

        <div className="flex flex-wrap gap-6 mb-6">
          <div className="bg-gray-800 rounded-md px-6 py-3 shadow-md flex flex-col items-center w-28">
            <span className="text-gray-400 text-sm">Release Date</span>
            <span className="text-white font-semibold">{new Date(data.release_date).toLocaleDateString()}</span>
          </div>

          <div className="bg-gray-800 rounded-md px-6 py-3 shadow-md flex flex-col items-center w-28">
            <span className="text-gray-400 text-sm">Rating</span>
            <span className="text-yellow-400 font-semibold text-lg">⭐ {data.vote_average.toFixed(1)}</span>
          </div>

          <div className="bg-gray-800 rounded-md px-6 py-3 shadow-md flex flex-col items-center w-28">
            <span className="text-gray-400 text-sm">Runtime</span>
            <span className="text-white font-semibold">{data.runtime} min</span>
          </div>

          <div className="bg-gray-800 rounded-md px-6 py-3 shadow-md flex flex-col items-center w-28">
            <span className="text-gray-400 text-sm">Status</span>
            <span className="text-green-500 font-semibold">{data.status}</span>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Genres</h3>
          <div className="flex flex-wrap gap-3">
            {data.genres.map((genre) => (
              <span
                key={genre.id}
                className="bg-blue-600 text-white px-4 py-1 rounded-full font-medium shadow-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>

        <button
          className="mt-8 bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white font-semibold py-3 rounded-lg shadow-lg max-w-xs"
          onClick={() => alert('Watch Trailer (implement modal or link)!')}
        >
          ▶ Watch Trailer
        </button>
      </div>
    </div>
  );
};

export default MovieDetail;
