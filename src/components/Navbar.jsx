
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
