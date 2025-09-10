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






// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { showMovie } from '../rtk_Querys/ShowMovieReducer/showMovie';

// const MovieDetail = () => {
//   const { id } = useParams();
//   const { data, isLoading, error } = showMovie.useMovieDetailQuery({ id, type: 'movie' });

//   if (isLoading) return <p className="text-white text-center mt-20 text-xl">Loading movie...</p>;
//   if (error || !data) return <p className="text-red-500 text-center mt-20 text-xl">Error loading movie.</p>;

//   return (
//     <div className="max-w-5xl mx-auto p-8 bg-gray-900 rounded-xl shadow-lg mt-12 text-white flex flex-col md:flex-row gap-10">
//       {/* Poster Section */}
//       <div className="flex-shrink-0 w-full md:w-1/3 rounded-lg overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
//         <img
//           src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
//           alt={data.title}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Info Section */}
//       <div className="flex flex-col justify-between w-full md:w-2/3">
//         <div>
//           <h1 className="text-4xl font-extrabold mb-4">{data.title}</h1>
//           <p className="text-gray-300 mb-6 leading-relaxed">{data.overview}</p>
//         </div>

//         <div className="flex flex-wrap gap-6 mb-6">
//           <div className="bg-gray-800 rounded-md px-6 py-3 shadow-md flex flex-col items-center w-28">
//             <span className="text-gray-400 text-sm">Release Date</span>
//             <span className="text-white font-semibold">{new Date(data.release_date).toLocaleDateString()}</span>
//           </div>

//           <div className="bg-gray-800 rounded-md px-6 py-3 shadow-md flex flex-col items-center w-28">
//             <span className="text-gray-400 text-sm">Rating</span>
//             <span className="text-yellow-400 font-semibold text-lg">⭐ {data.vote_average.toFixed(1)}</span>
//           </div>

//           <div className="bg-gray-800 rounded-md px-6 py-3 shadow-md flex flex-col items-center w-28">
//             <span className="text-gray-400 text-sm">Runtime</span>
//             <span className="text-white font-semibold">{data.runtime} min</span>
//           </div>

//           <div className="bg-gray-800 rounded-md px-6 py-3 shadow-md flex flex-col items-center w-28">
//             <span className="text-gray-400 text-sm">Status</span>
//             <span className="text-green-500 font-semibold">{data.status}</span>
//           </div>
//         </div>

//         <div>
//           <h3 className="text-xl font-semibold mb-3">Genres</h3>
//           <div className="flex flex-wrap gap-3">
//             {data.genres.map((genre) => (
//               <span
//                 key={genre.id}
//                 className="bg-blue-600 text-white px-4 py-1 rounded-full font-medium shadow-sm"
//               >
//                 {genre.name}
//               </span>
//             ))}
//           </div>
//         </div>

//         <button
//           className="mt-8 bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white font-semibold py-3 rounded-lg shadow-lg max-w-xs"
//           onClick={() => alert('Watch Trailer (implement modal or link)!')}
//         >
//           ▶ Watch Trailer
//         </button>
//       </div>
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

  if (isLoading)
    return <p className="text-white text-center mt-20 text-xl">Loading movie...</p>;
  if (error || !data)
    return <p className="text-red-500 text-center mt-20 text-xl">Error loading movie.</p>;

  return (
    <div
      className="relative min-h-screen w-full text-white"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-start gap-12">
        {/* Poster */}
        <div className="w-full md:w-1/3 flex-shrink-0 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-between w-full md:w-2/3">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">{data.title}</h1>
            <p className="text-gray-300 text-lg md:text-xl mb-6 max-w-3xl leading-relaxed">{data.overview}</p>

            <div className="flex flex-wrap gap-6 mb-8">
              <DetailItem title="Release" value={new Date(data.release_date).toLocaleDateString()} />
              <DetailItem title="Rating" value={`⭐ ${data.vote_average.toFixed(1)}`} />
              <DetailItem title="Runtime" value={`${data.runtime} min`} />
              <DetailItem title="Status" value={data.status} />
            </div>

            {/* Genres */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-3">Genres</h3>
              <div className="flex flex-wrap gap-3">
                {data.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="bg-white text-black px-4 py-1 rounded-full font-semibold text-sm shadow-md"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => alert("Trailer or Watch functionality goes here.")}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold rounded-full shadow-xl transition duration-300"
            >
              ▶ Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ title, value }) => (
  <div className="bg-white bg-opacity-10 rounded-lg px-5 py-3 shadow-sm text-center w-32">
    <div className="text-sm text-gray-300">{title}</div>
    <div className="text-lg font-bold">{value}</div>
  </div>
);

export default MovieDetail;
