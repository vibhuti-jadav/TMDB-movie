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
<button key={ele.id} onClick={()=>setList([...list, ele.id ])} className="border text-amber-500  text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm ">{ele.name}</button>
         ))}
        </div>
    </>
  )
}

export default MovieGeners

