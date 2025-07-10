
import React, { useState } from 'react';
import { showMovie } from '../rtk_Querys/ShowMovieReducer/showMovie';
import Pagination from './Pagination';
import Language from './Language';
import MovieGeners from './MovieGeners';
import { Link } from 'react-router';
import Recomandation from './Recomandation';
import Navbar from './Navbar';
import Card from './Card';

const Discover = () => {

     const [page , setPage] = useState(1)
     const [lang,setLang]=useState("")
     const [list,setList]=useState([])
     const [type,setType]=useState("movie")

  const { data, isLoading, error } = showMovie.useAllMovieQuery({ endpoint: `discover/${type}`, page: page , lang:lang,list:list });

   const toggleType = () => {
    setType((prev) => (prev === "movie" ? "tv" : "movie"));
  };

  if (isLoading) return <div>Loading movies...</div>;
  if (error) return <div>Failed to load movies.</div>;
  if (!data || !data.results) return <div>No movies found.</div>;

  return (
<>
<Navbar toggleType={toggleType} type={type} />
<Language  setLang={setLang}/>
  <MovieGeners setList={setList} list={list}/>
    
<h1 className="font-bold text-white text-center text-2xl">Discover</h1>
    <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

 

      {data.results.map((ele) => (
          <Card ele={ele}/>
      ))}


    </div>
    <Pagination page={page} setPage={setPage}/>
    <Recomandation/>
    </>
  );
};

export default Discover;
