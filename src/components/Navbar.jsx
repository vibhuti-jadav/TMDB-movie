// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { toggleType } from '../reduxToolkit/reducers/typeSlice';
// import Search from './Search';

// const Navbar = ({ toggleType, type }) => {

//   const dispatch = useDispatch()

//   return (

//     <nav className="bg-white border-gray-200 dark:bg-gray-900">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a className="flex items-center space-x-3 rtl:space-x-reverse">
//           <a className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Movie Web</a>
//         </a>
//         <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//           <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
//           <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
//             <span className="sr-only">Open main menu</span>
//           </button>
//         </div>
//         <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
//           <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//             <li>
//               <a href="#" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Home</a>
//             </li>
//             <li>
//               <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
//             </li>

//             <button onClick={() => dispatch(toggleType())} className='shadow px-2 rounded-2xl bg-blue-500'>
//              {type === "movie" ? "TV Shows" : "Movies"}
//             </button>

//             <Search />

//           </ul>
//         </div>
//       </div>
//     </nav>
    
    
//   )
// }

// export default Navbar


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleType } from '../reduxToolkit/reducers/typeSlice';
import Search from './Search';

const Navbar = () => {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.typeToggle.type);

  return (
    <nav className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <span className="text-3xl font-extrabold text-white tracking-wide">
            🎬 Movie<span className="text-blue-400">Web</span>
          </span>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => dispatch(toggleType())}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-full transition duration-300"
          >
            {type === 'movie' ? 'Switch to TV Shows' : 'Switch to Movies'}
          </button>

          <button
            className="hidden md:inline bg-transparent border border-white hover:bg-white hover:text-black text-white px-4 py-2 rounded-full transition duration-300"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-[#1c1c1c] py-4 shadow-inner">
        <div className="max-w-screen-xl mx-auto px-4">
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
