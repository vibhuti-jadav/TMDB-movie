import React, { useState } from 'react'
import { showMovie } from '../rtk_Querys/ShowMovieReducer/showMovie';

const MovieGeners = ({setList,list}) => {

      const { data } = showMovie.useAllMovieQuery({ endpoint: "genre/movie/list"});

      console.log("list:-", data)
  return (
    <>
        <div>
            {
            data?.genres?.map((ele)=>(              
 
           
<span key={ele.id} onClick={()=>setList([...list, ele.id ])} className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300">{ele.name}</span>
         ))}
        </div>
    </>
  )
}

export default MovieGeners

