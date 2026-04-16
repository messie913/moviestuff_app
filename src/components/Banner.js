import React from "react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import "swiper/css/effect-fade";
import "./../../node_modules/swiper/modules/pagination.css";
import "./../../node_modules/swiper/modules/navigation.css";

const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      autoplay
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
    >
      <SwiperSlide className="swiperSlideBanner">
        <img src="./banner/COUP_DE_COEUR_ban.png" alt="" />
      </SwiperSlide>
      <SwiperSlide className="swiperSlide">
        <img src="./banner/BD_CHOIX_ban.png" alt="" />
      </SwiperSlide>
      <SwiperSlide className="swiperSlide">
        <img src="./banner/HISTOIRE_ICI.png" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
