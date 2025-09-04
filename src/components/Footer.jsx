import React from 'react';
import {  RiGithubFill, RiLinkedinFill, RiTwitterXLine, RiYoutubeFill } from '@remixicon/react';

const Footer = () => {
  return (
    <footer className="bg-[#0b0f1a] text-gray-400 pt-10 pb-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10">
        
        {/* Logo and Description */}
        <div className="col-span-2 md:col-span-1">
          <h1 className="text-2xl font-bold text-white mb-3">🎥 MovieWeb</h1>
          <p className="text-sm">
            Explore movies, shows, and celebrities — all in one place. Powered by TMDb.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a  className="hover:text-white transition">Movies</a></li>
            <li><a  className="hover:text-white transition">TV Series</a></li>
            <li><a  className="hover:text-white transition">Search</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a  className="hover:text-white transition">FAQ</a></li>
            <li><a  className="hover:text-white transition">Contact</a></li>
            <li><a  className="hover:text-white transition">Privacy Policy</a></li>
            <li><a  className="hover:text-white transition">Terms of Service</a></li>
          </ul>
        </div>

        {/* TMDb Attribution */}
        <div>
          <h3 className="text-white font-semibold mb-4">Powered by</h3>
          <a 
            href="https://www.themoviedb.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <img 
              src="https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg" 
              alt="TMDb Logo" 
              className="h-12 rounded-2xl"
            />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 max-w-7xl mx-auto text-sm px-2">
        <p className="mb-3 md:mb-0">&copy; {new Date().getFullYear()} MovieVerse. All rights reserved.</p>
        <div className="flex space-x-4 text-xl">
          <a  target="_blank" className="hover:text-white transition" aria-label="Twitter">
           <RiTwitterXLine/>
          </a>
          <a  target="_blank" className="hover:text-white transition" aria-label="GitHub">
           <RiGithubFill/>
          </a>
          <a  target="_blank" className="hover:text-white transition" aria-label="YouTube">
            <RiYoutubeFill/>
          </a>
          <a  target="_blank" className="hover:text-white transition" aria-label="LinkedIn">
           <RiLinkedinFill/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
