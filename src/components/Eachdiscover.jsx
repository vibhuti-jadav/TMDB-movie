

import { useParams } from 'react-router-dom';
import { showMovie } from '../rtk_Querys/ShowMovieReducer/showMovie';
import { RiPlayCircleLine } from '@remixicon/react';
import { useState } from 'react';
import Recomandation from './Recomandation2';

const EachDiscover = () => {
  const { id, type } = useParams();

  const { data, isLoading, isError } = showMovie.useAllMovieQuery({
    endpoint: `${type}/${id}`,
  });

  const { data: credits } = showMovie.useAllMovieQuery({ endpoint: `${type}/${id}/credits` });
  const { data: videoData, isLoading: videoLoading } = showMovie.useMovieVideoQuery({ id, type });


  const [isModalOpen, setModalOpen] = useState(false);

  if (isLoading || videoLoading) return <p className="text-white">Loading movie details...</p>;
  if (isError || !data) return <p className="text-white">Error loading movie details.</p>;

  // const trailer = videoData?.results?.find(
  //   (vid) => vid.site === 'YouTube' && vid.type === 'Trailer'
  // );
  const trailer = videoData?.results?.find(
    (vid) => vid.site === 'YouTube' && (vid.type === 'Trailer' || vid.type === 'Teaser')
  );

  const openModal = () => {
    if (trailer) {
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  return (
    <>

      <div className=' mt-10 ml-10 mr-10 '>
{/*        

        <figure className="relative  transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <a href="#">
            <img className="rounded-3xl w-full h-200 object-cover" src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt={data.title} />

          </a>
          <figcaption className="absolute px-4 text-lg text-white bottom-6">

            <div className="content">
              <img
                src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                className=" w-55  shadow-gray-950 shadow-xl size-80 rounded-xl "
                alt={data.title}
              />
              <div className="name">{data.title}</div>
              <div className='w-6xl mt-4 mb-5'>
                <div className="des text-white font-bold">{data.overview}</div>
              </div>
              <p className="mt-4 text-sm opacity-80">{data.release_date || data.first_air_date} • {data.status}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {data.genres.map((genre) => (
          <span key={genre.id} className="bg-red-600 text-white px-3 py-1 text-xs rounded-full">{genre.name}</span>
        ))}
      </div>
     
      <div className="mt-6 flex gap-4">
        {trailer && (
          <button
            onClick={openModal}
            className="bg-white text-black font-bold px-6 py-2 rounded-full hover:bg-red-600 hover:text-white transition"
          >
            ▶ Watch Trailer
          </button>
        )}
        <button className="bg-gray-700 text-white font-bold px-6 py-2 rounded-full hover:bg-gray-500 transition">
          + Add to Watchlist
        </button>
      </div>

            </div>
          </figcaption>
        </figure> */}

        <figure className="relative w-full h-[90vh] overflow-hidden rounded-3xl">
  {/* Backdrop Image */}
  <img
    src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
    alt={data.title}
    className="absolute inset-0 w-full h-full object-cover brightness-50 transition-all duration-500"
  />

  {/* Content Overlay */}
  <figcaption className="relative z-10 flex flex-col md:flex-row items-start md:items-center h-full max-w-7xl mx-auto px-6 py-10">
    {/* Poster Image */}
    <img
      src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
      alt={data.title}
      className="w-44 md:w-64 rounded-xl shadow-2xl border-4 border-white/10 mb-6 md:mb-0"
    />

    {/* Movie Details */}
    <div className="md:ml-10 text-white max-w-3xl">
      <h1 className="text-3xl md:text-5xl font-bold">{data.title}</h1>

      <p className="mt-3 text-sm text-gray-300">
        {data.release_date || data.first_air_date} • {data.status}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {data.genres.map((genre) => (
          <span
            key={genre.id}
            className="bg-red-600 text-white px-3 py-1 text-xs font-semibold rounded-full"
          >
            {genre.name}
          </span>
        ))}
      </div>

      <p className="mt-4 text-base text-gray-200 line-clamp-5">
        {data.overview}
      </p>

      {/* Buttons */}
      <div className="mt-6 flex gap-4 flex-wrap">
        {trailer && (
          <button
            onClick={openModal}
            className="bg-white text-black font-bold px-6 py-2 rounded-full hover:bg-red-600 hover:text-white transition"
          >
            ▶ Watch Trailer
          </button>
        )}
        <button className="bg-gray-700 text-white font-bold px-6 py-2 rounded-full hover:bg-gray-500 transition">
          + Add to Watchlist
        </button>
      </div>
    </div>
  </figcaption>
</figure>




<section className="max-w-7xl mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="bg-gray-800 rounded-xl p-6 text-white shadow-md">
    <h3 className="text-lg font-semibold mb-2">Available to Download</h3>
    <div className="mt-2">
      {data.genres.map((genre) => (
        <span key={genre.id} className="bg-indigo-600 text-white px-2 py-1 text-xs rounded-full mr-2">{genre.name}</span>
      ))}
    </div>
  </div>
  <div className="bg-gray-800 rounded-xl p-6 text-white shadow-md">
    <h3 className="text-lg font-semibold mb-2">Audio & Subtitles</h3>
    {data.spoken_languages.map((lang) => (
      <p key={lang.name} className="text-sm">{lang.name}</p>
    ))}
  </div>
  <div className="bg-gray-800 rounded-xl p-6 text-white shadow-md">
    <h3 className="text-lg font-semibold mb-2">Cast</h3>
    {credits.cast.slice(0, 5).map((actor) => (
      <p key={actor.id} className="text-sm">{actor.name} as {actor.character}</p>
    ))}
  </div>
</section>




        <h1 className='text-2xl text-white mt-5 '>Cast</h1>
        <p className="text-[18px] font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          Cast
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-12 gap-6">
          {credits.cast.slice(0, 12).map((cast) => (
            <div
              key={cast.id}
              className="w-24  gap-0 flex flex-col items-center text-center"
            >
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w185${cast.profile_path}`
                    : 'https://via.placeholder.com/185x278?text=No+Image'
                }
                alt={cast.name}
                className="rounded-full mb-2 object-cover w-24 h-24"
              />

              <p className="text-gray-100 font-semibold text-sm text-wrap truncate">{cast.name}</p>
              <p className="text-white font-semibold text-sm text-wrap truncate">{cast.character}</p>
            </div>
          ))}
        </div>
      </div>

           <Recomandation /> 

    </>
  );
};

export default EachDiscover;
