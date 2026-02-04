import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperContainer = () => {
  return (
    <div className="w-full h-[200px]">
      <Swiper
        modules={[Navigation, Pagination]}
        className="w-full h-full"
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="flex items-center justify-center h-[100px] bg-[#f3f4f6]"> Slide 1</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center h-[100px] bg-[#d1d5db]"> Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperContainer;
