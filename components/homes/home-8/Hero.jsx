"use client";
import { heroSlides } from "@/data/aboutSlides";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Hero() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      slidesPerGroup={1}
      loop
      autoplay={{
        delay: 4000,
      }}
      speed={2500}
      modules={[Pagination, Autoplay]}
      pagination={{
        clickable: true,
        el: ".spt6",

        bulletActiveClass: "active",
        renderBullet: function (index, className) {
          return `  <button role="button" class="owl-dot ${className}">
                <span></span>
              </button>`;
        },
      }}
      className="hero-sec owl-slider owl-carousel owl-theme owl-btn-center-lr"
    >
      {heroSlides.map((slide) => (
        <SwiperSlide className="item slide-item" key={slide.id}>
          <div className="slide-item-img">
            <Image
              src={slide.imgSrc}
              width={1140}
              height={575}
              className=""
              alt=""
            />
          </div>
          <div className="slide-content">
            <div className="slide-content-box">
              <div className="slide-content-area">
                <h2 className="slider-title">{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div style={{ zIndex: 1 }} className="owl-dots spt6"></div>
    </Swiper>
  );
}
