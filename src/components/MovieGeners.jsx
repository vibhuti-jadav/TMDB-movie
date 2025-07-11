import React, { useState } from 'react'
import { showMovie } from '../rtk_Querys/ShowMovieReducer/showMovie';

const MovieGeners = ({setList,list}) => {

      const { data } = showMovie.useAllMovieQuery({ endpoint: "genre/movie/list"});

      // console.log("list:-", data)

        console.log(list)
   
        function isGeners(id){
           
            return list.includes(id)
        }

        function handleGeners(id){
          if (list.includes(id)){
          let newList =  list.filter((e)=>e!=id)
          setList(newList)
          }                                                            
          else{
            setList([...list, id ])
          }   
        }

isGeners(99)

  return (
    <>
        <div>
            {
            data?.genres?.map((ele)=>(              
<button key={ele.id} onClick={()=>handleGeners(ele.id)} className={`border border-amber-500 text-amber-200  text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm  ${isGeners(ele.id) ? `bg-amber-500 text-white` : `bg-transparent`} `}>{ele.name}</button>
         ))}
        </div>
    </>
  )
}

export default MovieGeners

