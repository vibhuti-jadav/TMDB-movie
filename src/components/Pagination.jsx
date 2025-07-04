import React, { useState } from 'react'
import { showMovie } from '../rtk_Querys/ShowMovieReducer/showMovie';



const Pagination = ({page,setPage}) => {

    const { data } = showMovie.useAllMovieQuery({ endpoint: "discover/movie", page: 1 });
    console.log(data)

  return (
    <>
    <div className="flex ">
  <button onClick={()=>setPage(page-1)} disabled={page==1} className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
   
    Previous
  </button>
  <button  className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
   
  {page}
  </button>
  <button onClick={()=>setPage(page+1)}   className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
    Next
   
  </button>
</div>
    </>
  )
}

export default Pagination