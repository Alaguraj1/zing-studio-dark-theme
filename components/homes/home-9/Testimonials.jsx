"use client";
import { testimonialsData } from "@/data/testimonials";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  return (
    <div
      className="section-full content-inner-2 wow fadeIn"
      data-wow-duration="2s"
      data-wow-delay="0.3s"
    >
      <div className="container">
        <div className="section-head style2 text-center">
          <h2 className="title">Clients Say About Us</h2>
          <p>19+ years’ experience</p>
        </div>
        <div className="row">
          <div
            className="col-lg-12 wow fadeIn"
            data-wow-delay="0.2s"
            data-wow-duration="2s"
          >
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              slidesPerGroup={1}
              loop
              autoplay={{
                delay: 4000,
              }}
              speed={2500}
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: ".snbp9",
                nextEl: ".snbn9",
              }}
              className="testimonial-one owl-carousel owl-btn-center-lr owl-btn-1 primary"
            >
              {testimonialsData.map((testimonial, index) => (
                <SwiperSlide className="item" key={index}>
                  <div className="testimonial-1">
                    <div className="testimonial-pic radius">
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
                      <strong className="testimonial-name">
                        {testimonial.name}
                      </strong>
                      <span className="testimonial-position">
                        {testimonial.position}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="owl-nav">
                <button
                  type="button"
                  style={{ zIndex: 1 }}
                  role="presentation"
                  className="owl-prev snbp9"
                >
                  <i className="ti-arrow-left"></i>
                </button>
                <button
                  type="button"
                  style={{ zIndex: 1 }}
                  role="presentation"
                  className="owl-next snbn9"
                >
                  <i className="ti-arrow-right"></i>
                </button>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
