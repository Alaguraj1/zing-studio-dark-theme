"use client";

import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slidesData = [
  {
    backgroundImage:
      'url("/images/main-slider/slide4-1.jpg") center center no-repeat',
    title: "Fast and Reliable Electrical services",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    buttons: ["ABOUT US", "OUR SERVICES"],
  },
  {
    backgroundImage:
      'url("/images/main-slider/slide4-2.jpg") center center no-repeat',
    title: "Fast and Reliable Electrical services",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    buttons: ["ABOUT US", "OUR SERVICES"],
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
        navigation={{ prevEl: ".snbph4", nextEl: ".snbnh4" }}
        className=" swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress home-slider2 swiper-backface-hidden"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`swiper-slide slider-content `}
            style={{ background: slide.backgroundImage }}
          >
            <div className="inner sliderStyle4">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <Link href={"/about-1"}>
                <button className="site-button">ABOUT US</button>
              </Link>
              <Link href={"/services-1"}>
                <button className="site-button">OUR SERVICES</button>
              </Link>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button" style={{ zIndex: 1 }}>
          <div className="swiper-button-prev snbph4 previousButton swiper-button-disabled">
            <i className="las la-angle-left" />
          </div>
          <div className="swiper-button-next snbnh4 nextButton">
            <i className="las la-angle-right" />
          </div>
        </div>
      </Swiper>
    </div>
  );
}
