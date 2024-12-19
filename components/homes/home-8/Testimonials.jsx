"use client";

import { testimonialsData } from "@/data/team";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  return (
    <div
      className="section-full content-inner wow fadeIn"
      data-wow-duration="2s"
      data-wow-delay="0.3s"
    >
      <div className="section-head text-center">
        <h2 className="title">Client Testimonial</h2>
        <div className="dlab-separator bg-primary m-b0" />
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop
        autoplay={{
          delay: 4000,
        }}
        speed={2500}
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
          el: ".spt8",
          bulletActiveClass: "active",
          renderBullet: function (index, className) {
            return `  <button role="button" class="owl-dot ${className}">
                <span></span>
              </button>`;
          },
        }}
        className="client-carousel owl-carousel owl-theme owl-btn-center-lr dots-theme dots-theme owl-btn-2 primary"
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide className="item" key={index}>
            <div className="testimonial-1">
              <div className="testimonial-pic quote-left radius shadow">
                <Image
                  src={testimonial.image}
                  width={100}
                  height={100}
                  alt={testimonial.name}
                />
              </div>
              <div className="testimonial-text">
                <p>{testimonial.text}</p>
              </div>
              <div className="testimonial-detail">
                <span className="testimonial-position">{testimonial.name}</span>
                <strong className="testimonial-name">
                  {testimonial.position}
                </strong>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div style={{ zIndex: 1 }} className="owl-dots spt8"></div>
      </Swiper>
    </div>
  );
}
