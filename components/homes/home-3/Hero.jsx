"use client";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slidesData = [
  {
    backgroundImage:
      'url("/images/main-slider/slide3-1.jpg") center center no-repeat',
    title: "Economy Needs A Healthy Steel Industry",
  },
  {
    backgroundImage:
      'url("/images/main-slider/slide3-2.jpg") center center no-repeat',
    title: "Economy Needs A Healthy Steel Industry",
  },
];

export default function Hero() {
  return (
    <div className="hero-sec">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4000,
        }}
        speed={2500}
        loop
        navigation={{
          prevEl: ".snbph3",
          nextEl: ".snbnh3",
        }}
        className=" swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress home-slider2 swiper-backface-hidden"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`swiper-slide slider-content `}
            style={{ background: slide.backgroundImage }}
          >
            <div className="inner sliderStyle3">
              <h1>{slide.title}</h1>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button" style={{ zIndex: 1 }}>
          <div className="swiper-button-prev snbph3 previousButton "></div>
          <div className="swiper-button-next snbnh3 nextButton"></div>
        </div>
      </Swiper>{" "}
    </div>
  );
}
