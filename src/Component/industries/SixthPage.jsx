
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const cardsData = [
  {
    text: (
      <>
        <strong>
          "The process is <span className='text-[#b2246a]'>very smooth</span>,
        </strong>{" "}
        and technicians find it easy to learn and develop a habit of consistently using it."
      </>
    ),
    icon: "https://m360soft.com/images/home/testimonials/519techservicesinc.svg",
     text1:(
      <>
      519 Tech Services Inc.
      </>
     )
  },
  {
    text: (
      <>
        <strong>
          "M360 <span className='text-[#b2246a]'>reduced our costs</span>{"  "} and improved the testing process
        </strong>{" "}
        because che software is faster chan the others we evaluated."
      </>
    ),
    icon: "https://m360soft.com/images/home/testimonials/ecotechelectronicsllc.svg",
     text1:(
      <>
     e-Pol
      </>
     )
  },
  {
    text: (
      <>

        "This software handles all the heavy lifting and generates reports.  <strong> It is {" "}
          <span className='text-[#b2246a]'>User-friendly</span> and more affordable
        </strong>{" "}
        than all competitors."
      </>
    ),
    icon: "https://m360soft.com/images/home/testimonials/epol.svg",
     text1:(
      <>
      Ecotech Electronics LLC
      </>
     )
  },
  {
    text: (
      <>"I recommend M360 every chance I get -{"  "}
        <strong>
          the {" "}
          <span className='text-[#b2246a]'>Cost-effective</span>{""}
          , and intuitiveness
        </strong>{" "}
        of the program is excellent."
      </>
    ),
    icon: "https://m360soft.com/images/home/testimonials/wsa.svg",
     text1:(
      <>
      WSA
      </>
     )
  },
  {
    text: (
      <>
        <strong>
          "Excellent and
          <span className='text-[#b2246a]'>{" "}fast support</span>{""}
          !
        </strong>{" "}
        Recommend them! All of my problems has been solved"{"  "}
      </>
    ),
    icon: "https://m360soft.com/images/home/testimonials/eyephoneserviceskft.svg",
     text1:(
      <>
      Eyephone Services Kft.
      </>
     )
  },

];

export default function App() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[linear-gradient(180deg,#e2edf5_21.94%,#ebebeb)] relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://m360soft.com/images/industry/testimonials-bg.svg')",
          opacity: 0.5,
        }}
      ></div>
      <div>
        <h1 className="text-black text-4xl font-extrabold">What our <span className='text-[#b2246a]'> users</span> say</h1>
      </div>
      <div className="md:w-6xl w-full flex justify-center items-center mt-10 p-5">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-7xl w-full relative"
        >
          {cardsData.map((card, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <div className="bg-white h-[360px] w-[270px] md:w-[320px] rounded-2xl shadow-lg p-6 flex flex-col justify-between">
                <p className="text-[21px] text-center leading-relaxed">{card.text}</p>
                <div className="flex items-center gap-3 ms-5 pt-4 mt-4  justify-center w-[70%]">
                  <div className=" bg-white shadow-lg h-[55px] w-[55px] flex  justify-center items-center  rounded-full">
                     <img src={card.icon} alt="" className="w-8 h-8" />
                  </div>
                  <div className="h-[40px]  w-[1px] bg-gray-800"></div>
                 
                  <span className="font-bold text-gray-800">{card.text1}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="custom-pagination absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-10"></div>

      <style jsx>{`
        .swiper-pagination-bullet {
          width: 16px !important;
          height: 16px !important;
          background-color: #b2246a !important;
          margin-right: 12px !important; /* Adds gap between bullets */
        }
        .swiper-pagination-bullet-active {
          width: 16px !important;
          height: 16px !important;
          background-color: #b2246a !important;
        }
        .swiper-pagination-bullet:last-child {
          margin-right: 0 !important; /* Removes margin from the last bullet */
        }
      `}</style>
    </div>
  );
}
