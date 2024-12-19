"use client";
import { testimonials7 } from "@/data/testimonials";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  return (
    <div
      className="section-full content-inner bg-white wow bounceIn"
      data-wow-duration="2s"
      data-wow-delay="0.9s"
    >
      <div className="container">
        <div className="section-head text-center">
          <h2 className="title">Testimonials</h2>
          <p>
            There are many variations of passages of Lorem Ipsum typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
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
          modules={[Autoplay]}
          className="testimonial-seven owl-loaded owl-theme owl-carousel owl-btn-center-lr owl-btn-3"
        >
          {testimonials7.map((testimonial, index) => (
            <SwiperSlide key={index} className="item">
              <div className="testimonial-10">
                <div className="testimonial-pic radius">
                  <Image
                    src={testimonial.imageUrl}
                    width={100}
                    height={100}
                    alt=""
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
        </Swiper>
      </div>
    </div>
  );
}
