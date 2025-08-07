// import React, { useState } from 'react'
// import { showMovie } from '../rtk_Querys/ShowMovieReducer/showMovie';



// const Pagination = ({page,setPage}) => {

//     const { data } = showMovie.useAllMovieQuery({ endpoint: "discover/movie", page: 1 });
//     console.log(data)

//   return (
//     <>
//     <div className="flex max-w-xs my-10 mx-auto ">
//   <button onClick={()=>setPage(page-1)} disabled={page==1} className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
   
//     Previous
//   </button>
//   <button  className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
   
//   {page}
//   </button>
//   <button onClick={()=>setPage(page+1)}  className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//     Next
//   </button>
// </div>
//     </>
//   )
// }

// export default Pagination

import React from 'react';
import { showMovie } from '../rtk_Querys/ShowMovieReducer/showMovie';

const Pagination = ({ page, setPage }) => {
  const { data } = showMovie.useAllMovieQuery({ endpoint: 'discover/movie', page: 1 });
  const totalPages = data?.total_pages || 500; // Limit to TMDB max pages

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="flex justify-center items-center my-10 gap-4">
      <button
        onClick={handlePrev}
        disabled={page === 1}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-md hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        
        Previous
      </button>

      <span className="text-lg font-semibold text-white">
         <span className="text-blue-400">{page}</span> 
      </span>

      <button
        onClick={handleNext}
        disabled={page === totalPages}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-md hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        Next
        
      </button>
    </div>
  );
};

export default Pagination;
