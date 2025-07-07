import React from 'react'
import { showMovie } from '../rtk_Querys/ShowMovieReducer/showMovie';

const Recomandation = () => {
      const { data } = showMovie.useAllMovieQuery({ endpoint: "movie/541671/recommendations"});
    console.log("reco",data)

  return (
    <>
    <h1 className="font-bold text-white text-center text-2xl">Recomandation</h1>
    <div className='max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {
            data?.results.map((ele)=>(
                

  

<div key={ele.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${ele.backdrop_path}`} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ele.original_title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ele.
release_date
}</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>


            ))
        }
    </div>
    </>
  )
}

export default Recomandation