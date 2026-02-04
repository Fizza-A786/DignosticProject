import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const logos = [
  "https://m360soft.com/images/home/partners/the-phone-surgery-v2.svg",
  "https://m360soft.com/images/home/partners/delta-servis-v2.svg",
  "https://m360soft.com/images/home/partners/fyoocha-v2.svg",
  "https://m360soft.com/images/home/partners/grande-mobile-v2.svg",
  "https://m360soft.com/images/home/partners/macropay-v2.svg",
  "https://m360soft.com/images/home/partners/mobileup-v2.svg",
  "https://m360soft.com/images/home/partners/the-fixers-v2.svg",
  "https://m360soft.com/images/home/partners/v-v2.svg",
  "https://m360soft.com/images/home/partners/vista-repair-v2.svg"
];

const SwiperContainer = () => {
  return (
    <div className="w-full bg-white py-8">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={4000} // controls smoothness
        slidesPerView={2}
        spaceBetween={40}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className="flex items-center"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <img
              src={logo}
              alt="brand logo"
              className="h-20 object-contain grayscale hover:grayscale-0 transition"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperContainer;
