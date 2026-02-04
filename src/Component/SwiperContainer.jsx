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
        <div className="w-full bg-white py-8 px-4 sm:px-8">
            <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={4000} // controls smoothness
                slidesPerView={2}
                spaceBetween={20}
                breakpoints={{
                    480: { slidesPerView: 2, spaceBetween: 20 },
                    640: { slidesPerView: 3, spaceBetween: 25 },
                    768: { slidesPerView: 4, spaceBetween: 30 },
                    1024: { slidesPerView: 5, spaceBetween: 35 },
                    1280: { slidesPerView: 6, spaceBetween: 40 },
                }}
                className="flex items-center"
            >
                {logos.map((logo, index) => (
                    <SwiperSlide key={index} className="flex items-center justify-center px-2">
                        <img
                            src={logo}
                            alt={`brand logo ${index + 1}`}
                            className="h-12 sm:h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperContainer;