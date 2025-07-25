// import React from 'react'
// import { showMovie } from '../rtk_Querys/ShowMovieReducer/showMovie';
// import { Link } from 'react-router';

// const Recomandation = () => {
//       const { data } = showMovie.useAllMovieQuery({ endpoint: "movie/541671/recommendations"});


//   return (
//     <>
//     <h1 className="font-bold text-white text-center text-2xl">Recomandation</h1>
//     <div className='max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
//         {
//             data?.results.map((ele)=>(

// <div key={ele.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
//     <a href="#">
//         <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${ele.backdrop_path}`} alt="" />
//     </a>
//     <div className="p-5">
//         <a href="#">
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ele.original_title}</h5>
//         </a>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ele.
// release_date
// }</p>
//        <Link  to={`/Eachdiscover/${ele.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       
//             Read more
//              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//             </svg>
        
//        </Link> 
//     </div>
// </div>


//             ))
//         }
//     </div>
//     </>
//   )
// }

// export default Recomandation


import '../App.css'
import React, { useEffect, useRef } from 'react';
import { showMovie } from '../rtk_Querys/ShowMovieReducer/showMovie';
import { Link } from 'react-router-dom';

const Recomandation = () => {
  const { data } = showMovie.useAllMovieQuery({ endpoint: "movie/541671/recommendations" });

 
  const firstFive = data?.results.slice(0, 10) || [];
  const secondFive = data?.results.slice(10, 20) || [];

  function useSliderDrag(ref) {
    useEffect(() => {
      const slider = ref.current;
      if (!slider) return;

      let isDragging = false;
      let startX;
      let scrollLeft;
      let lastX = 0;
      let timestamp = 0;
      let velocity = 0;
      let momentumAnimation = null;

      function throttle(callback, delay) {
        let lastCall = 0;
        return function (...args) {
          const now = Date.now();
          if (now - lastCall < delay) return;
          lastCall = now;
          callback.apply(this, args);
        };
      }

      function updateVelocity(clientX) {
        const now = Date.now();
        const delta = now - timestamp;
        if (delta > 0) {
          velocity = (clientX - lastX) / delta;
        }
        lastX = clientX;
        timestamp = now;
      }

      function animateMomentum() {
        if (!velocity) return;

        const decay = 0.95;
        velocity *= decay;

        if (Math.abs(velocity) < 0.1) {
          velocity = 0;
          return;
        }

        slider.scrollLeft -= velocity * 20;
        momentumAnimation = requestAnimationFrame(animateMomentum);
      }

      function onMouseDown(e) {
        if (momentumAnimation) {
          cancelAnimationFrame(momentumAnimation);
          momentumAnimation = null;
        }
        isDragging = true;
        slider.classList.add('grabbing');
        startX = e.clientX;
        scrollLeft = slider.scrollLeft;
        lastX = startX;
        timestamp = Date.now();
        e.preventDefault();
      }

      const onMouseMove = throttle((e) => {
        if (!isDragging) return;
        e.preventDefault();
        updateVelocity(e.clientX);
        const x = e.clientX;
        slider.scrollLeft = scrollLeft - (x - startX);
        startX = x;
        scrollLeft = slider.scrollLeft;
      }, 16);

      function onMouseUp(e) {
        if (!isDragging) return;
        e.preventDefault();
        isDragging = false;
        slider.classList.remove('grabbing');
        animateMomentum();
      }

      function onTouchStart(e) {
        if (momentumAnimation) {
          cancelAnimationFrame(momentumAnimation);
          momentumAnimation = null;
        }
        isDragging = true;
        const touch = e.touches[0];
        startX = touch.clientX;
        scrollLeft = slider.scrollLeft;
        lastX = startX;
        timestamp = Date.now();
        e.preventDefault();
      }

      const onTouchMove = throttle((e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.touches[0].clientX;
        updateVelocity(x);
        slider.scrollLeft = scrollLeft - (x - startX);
        startX = x;
        scrollLeft = slider.scrollLeft;
      }, 16);

      function onTouchEnd(e) {
        if (!isDragging) return;
        isDragging = false;
        slider.classList.remove('grabbing');
        animateMomentum();
      }

      slider.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      slider.addEventListener('touchstart', onTouchStart, { passive: false });
      window.addEventListener('touchmove', onTouchMove, { passive: false });
      window.addEventListener('touchend', onTouchEnd);

      return () => {
        slider.removeEventListener('mousedown', onMouseDown);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        slider.removeEventListener('touchstart', onTouchStart);
        window.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('touchend', onTouchEnd);

        if (momentumAnimation) cancelAnimationFrame(momentumAnimation);
      };
    }, [ref]);
  }

 
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

 
  useSliderDrag(sliderRef1);
  useSliderDrag(sliderRef2);

  function renderSliderItems(items, startIndex = 0) {
    return items.map((ele, i) => {
      const idx = startIndex + i;
      return (
        <div key={ele.id} className="container">
          <div className="img-container">
            <Link to={`/discover/${ele.media_type}/${ele.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${ele.backdrop_path}`}
                alt={ele.original_title}
              />
            </Link>
          </div>
          <svg
            className="svg-overlay"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            dangerouslySetInnerHTML={{
              __html: `
                <defs>
                  <linearGradient id="gradientStroke${idx}" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#FDFC47" />
                    <stop offset="100%" stop-color="#FCB69F" />
                  </linearGradient>
                  <linearGradient id="gradientFill${idx}" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#FDFC47" />
                    <stop offset="100%" stop-color="#FCB69F" />
                  </linearGradient>
                </defs>
                <text x="50" y="60" font-size="180" font-family="'Funnel Display', sans-serif"
                  font-weight="800" stroke="url(#gradientStroke${idx})" stroke-width="2" fill="none"
                  text-anchor="middle" dominant-baseline="middle" transform="skewX(-5)">
                  ${idx + 1}
                </text>
                <text x="50" y="60" font-size="180" font-family="'Funnel Display', sans-serif"
                  font-weight="800" fill="url(#gradientFill${idx})" opacity="0"
                  text-anchor="middle" dominant-baseline="middle" transform="skewX(-5)"
                  class="fill-text">
                  ${idx + 1}
                </text>
              `,
            }}
          />
        </div>
      );
    });
  }

  return (
    <>
      <h1 className="font-bold text-white text-center text-2xl mb-6">Recommendation</h1>

 
      <div className="slider mb-10" ref={sliderRef1}>
        <div className="slider-content" id="sliderContent1">
          {renderSliderItems(firstFive, 0)}
        </div>
      </div>

  
      <div className="slider" ref={sliderRef2}>
        <div className="slider-content" id="sliderContent2">
          {renderSliderItems(secondFive, 10)}
        </div>
      </div>
    </>
  );
};

export default Recomandation;
