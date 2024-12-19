"use client";

import { testimonials2 } from "@/data/testimonials";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  return (
    <div
      className="section-full content-inner-2 bg-primary wow fadeIn"
      data-wow-duration="2s"
      data-wow-delay="0.3s"
    >
      <div className="container">
        <div className="section-head style2 text-center text-white">
          <h2 className="title">Testimonials</h2>
          <p>
            There are many variations of passages of Lorem Ipsum typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <div className="section-content relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            slidesPerGroup={1}
            loop
            autoplay={{
              delay: 4000,
            }}
            speed={2500}
            modules={[Navigation, Autoplay, Pagination]}
            navigation={{
              prevEl: ".snbp6",
              nextEl: ".snbn6",
            }}
            pagination={{
              clickable: true,
              el: ".spt7",
              bulletActiveClass: "active",
              renderBullet: function (index, className) {
                return `  <button role="button" class="owl-dot ${className}">
                <span></span>
              </button>`;
              },
            }}
            className="testimonial-one-dots owl-carousel owl-btn-center-lr owl-btn-3 owl-theme owl-btn-white testimonial-11-area owl-dots-white-full"
          >
            {testimonials2.slice(0, 3).map((elm, i) => (
              <SwiperSlide key={i} className="item">
                <div className="testimonial-11 text-white">
                  <div className="testimonial-pic">
                    <Image src={elm.image} width={500} height={600} alt="" />
                  </div>
                  <div className="testimonial-detail clearfix">
                    <div className="testimonial-text">
                      <p>
                        {elm.text}
                        {elm.text}
                        [...]
                      </p>
                    </div>
                    <h5 className="testimonial-name m-t0 m-b5">{elm.name}</h5>
                    <span className="testimonial-position">{elm.position}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="owl-dots spt7"></div>
          </Swiper>
          <div className="owl-btn-center-lr">
            <div className="owl-nav">
              <button
                style={{ zIndex: 1, background: "transparent" }}
                type="button"
                role="presentation"
                className="owl-prev snbp6"
              >
                <i className="ti-arrow-circle-left"></i>
              </button>
              <button
                style={{ zIndex: 1, background: "transparent" }}
                type="button"
                role="presentation"
                className="owl-next snbn6"
              >
                <i className="ti-arrow-circle-right"></i>
              </button>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
