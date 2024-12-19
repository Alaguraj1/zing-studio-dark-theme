"use client";

import { testimonials } from "@/data/testimonials";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  return (
    <div className="section-full content-inner bg-gray">
      <div className="container">
        <div className="section-head style2 text-center">
          <h2 className="title">Testimonials</h2>
          <p>
            There are many variations of passages of Lorem Ipsum typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          slidesPerGroup={1}
          loop
          autoplay={{
            delay: 4000,
          }}
          speed={2500}
          modules={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            991: {
              slidesPerView: 2,
            },
          }}
          className="testimonial-five owl-none owl-loaded owl-theme owl-carousel"
        >
          {testimonials.map((elm, i) => (
            <SwiperSlide
              key={i}
              className="item wow fadeInUp "
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div className="testimonial-6">
                <div className="testimonial-text bg-white quote-left quote-right">
                  <p>{elm.text} [...]</p>
                </div>
                <div className="testimonial-detail clearfix bg-primary text-white">
                  <h4 className="testimonial-name m-tb0">{elm.name}</h4>
                  <span className="testimonial-position">{elm.position}</span>
                  <div className="testimonial-pic radius">
                    <Image src={elm.image} alt="" width={100} height={100} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
