import React from 'react'
import { Link } from 'react-router'

const Card = ({ele}) => {

    let movieName=ele.title ||ele.name
  return (
        <div key={ele.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <a >
            <img
              className="p-8 rounded-t-lg w-full h-64 object-cover"
              src={`https://image.tmdb.org/t/p/w500${ele.poster_path}`}
              alt={ele.title}
            />
          </a>
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight  ">{movieName}</h5>
            <div className="flex items-center mt-2.5 mb-5">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm  dark:text-blue-800">
                {ele.vote_average.toFixed(1)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">Release: {ele.release_date}</span>
             <Link to={`/Eachdiscover/${ele.id}`}   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View
             </Link>
            </div>
          </div>
        </div>
  )
}

export default Card