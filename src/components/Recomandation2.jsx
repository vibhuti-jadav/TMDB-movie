import React from "react";
import { showMovie } from "../rtk_Querys/ShowMovieReducer/showMovie";
import { Link } from "react-router-dom"; // fix import
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Recomandation = ({ id, type }) => {
  // const { data } = showMovie.useAllMovieQuery({
  //   endpoint: 'movie/541671/recommendations',
  // });
  const { data } = showMovie.useAllMovieQuery({
    endpoint: `${type}/${id}/recommendations`,
  });

  return (
    <div className="mt-16 mb-24 px-4 md:px-12">
      <h2 className="text-3xl font-extrabold text-white mb-8 text-center">
        🔥 Recommended for you{" "}
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="mySwiper"
      >
        {data?.results?.map((ele) => (
          <SwiperSlide key={ele.id}>
            <div className="bg-[#1f1f1f] rounded-xl shadow-md overflow-hidden hover:scale-105 transition-all duration-300">
              <img
                src={`https://image.tmdb.org/t/p/w500${ele.backdrop_path}`}
                alt={ele.original_title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-white">
                <h3 className="text-lg font-bold mb-1">{ele.original_title}</h3>
                <p className="text-sm text-gray-400 mb-3">{ele.release_date}</p>
                <Link
                  to={`/discover/movie/${ele.id}`}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-full hover:bg-red-700 transition"
                >
                  ▶ Read More
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Recomandation;
