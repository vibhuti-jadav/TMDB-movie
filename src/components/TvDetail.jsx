import React from 'react';
import { useParams } from 'react-router-dom';
import { showMovie } from '../rtk_Querys/ShowMovieReducer/showMovie';

const TvDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = showMovie.useMovieDetailQuery({ id, type: 'tv' });

  if (isLoading) return <p className="text-white">Loading movie...</p>;
  if (error || !data) return <p className="text-red-500">Error loading movie.</p>;

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p className="mt-4">{data.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt={data.title}
        className="mt-4 w-64 rounded"
      />
    </div>
  );
};

export default TvDetail;
