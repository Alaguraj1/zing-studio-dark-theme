"use client";

import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slidesData = [
  {
    backgroundImage:
      'url("/images/main-slider/slide10-1.jpg") center center no-repeat',
    subTitle: "INVESTMENT OPPORTUNITIES IN LEATHER",
    title: "Welcome Leather Industry",
    buttonLabel: "CONTINUE THE JOURNEY",
  },
  {
    backgroundImage:
      'url("/images/main-slider/slide10-2.jpg") center center no-repeat',
    subTitle: "INVESTMENT OPPORTUNITIES IN LEATHER",
    title: "Welcome Leather Industry",
    buttonLabel: "CONTINUE THE JOURNEY",
  },
];
export default function Hero() {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 4000,
      }}
      speed={2500}
      loop
      navigation={{ prevEl: ".snbph10", nextEl: ".snbnh10" }}
      className="hero-sec swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress home-swiper-10 swiper-backface-hidden"
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide
          key={index}
          className="swiper-slide slider-content"
          style={{ background: slide.backgroundImage }}
        >
          <div className="inner sliderStyle10">
            <div>
              <p className="subTitle1 text-primary">{slide.subTitle}</p>
              <h1>{slide.title}</h1>
              <Link href={"/portfolio-grid-2"}>
                <button className="text-primary hover-bg-white-btn">
                  {slide.buttonLabel}
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}

      <div className="swiper-button" style={{ zIndex: 1 }}>
        <div className="swiper-button-prev snbph10 previousButton swiper-button-disabled">
          <i className="las la-angle-left" />
        </div>
        <div className="swiper-button-next snbnh10 nextButton">
          <i className="las la-angle-right" />
        </div>
      </div>
    </Swiper>
  );
}
