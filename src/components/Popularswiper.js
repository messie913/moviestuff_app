import React from "react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import "swiper/css/effect-coverflow";
import "./../../node_modules/swiper/modules/pagination.css";
import "./../../node_modules/swiper/modules/navigation.css";

const Popularswiper = ({ popMovies }) => {
  // console.log(popMovies);

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 20,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        reverseDirection: false,
      }}
      modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
      className="swiperPop"
    >
      {popMovies.map((movie) => (
        <SwiperSlide className="swiperSlide" key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Popularswiper;
