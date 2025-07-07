import React, { useEffect, useRef } from 'react';
import { showMovie } from '../rtk_Querys/ShowMovieReducer/showMovie';
import { RiArrowDropLeftLine, RiArrowDropRightLine, RiHeartFill } from "@remixicon/react";

const Slider = () => {
  const listRef = useRef(null);
  const carouselRef = useRef(null);
  const runningTimeRef = useRef(null);
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);

   const { data } = showMovie.useAllMovieQuery({ endpoint: "discover/movie"});
  

  useEffect(() => {
    const timeRunning = 3000;
    const timeAutoNext = 7000;

    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      nextBtnRef.current.click();
    }, timeAutoNext);

    const resetTimeAnimation = () => {
      const runningTime = runningTimeRef.current;
      runningTime.style.animation = 'none';
      runningTime.offsetHeight; // force reflow
      runningTime.style.animation = null;
      runningTime.style.animation = 'runningTime 7s linear 1 forwards';
    };

    const showSlider = (type) => {
      const sliderItems = listRef.current.querySelectorAll('.item');

      if (type === 'next') {
        listRef.current.appendChild(sliderItems[0]);
        carouselRef.current.classList.add('next');
      } else {
        listRef.current.prepend(sliderItems[sliderItems.length - 1]);
        carouselRef.current.classList.add('prev');
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselRef.current.classList.remove('next');
        carouselRef.current.classList.remove('prev');
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextBtnRef.current.click();
      }, timeAutoNext);

      resetTimeAnimation();
    };

    nextBtnRef.current.onclick = () => showSlider('next');
    prevBtnRef.current.onclick = () => showSlider('prev');

    resetTimeAnimation();

    return () => {
      clearTimeout(runNextAuto);
      clearTimeout(runTimeOut);
    };
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
          <div className="carousel" ref={carouselRef}>
      <div className="list" ref={listRef}>
        {data?.results.map((ele, index) => (
          <div
            key={ele.id}
            className="item"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${ele.backdrop_path || ele.poster_path})`,
            }}
          >
            <div className="content">
              <div className="name">{ele.title || ele.name}</div>
              <div className="des">{ele.overview}</div>
              <div className="btn">
                <button>See More</button>
                <button>Subscribe</button>
              </div>
            </div>    
          </div>
        ))}
      </div>

      <div className="arrows">
        <button className="prev" ref={prevBtnRef}><RiArrowDropLeftLine className='ml-1 size-10'/></button>
        <button className="next" ref={nextBtnRef}><RiArrowDropRightLine className='ml-1 size-10'/></button>
      </div>

      <div className="timeRunning" ref={runningTimeRef}></div>
    </div>
    </div>
  );
};

export default Slider;
