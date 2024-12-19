"use client";
import { testimonials } from "@/data/testimonials";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  return (
    <div className="section-full content-inner bg-gray">
      <div className="container">
        <div className="section-head text-center">
          <h2 className="title">Success Stories</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={5}
          slidesPerGroup={1}
          //   swiper-slide swiper-slide-active item wow bounceInUp
          loop
          autoplay={{
            delay: 4000,
          }}
          speed={2500}
          centeredSlides
          modules={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
          className="testimonial-six centeredSlides owl-carousel owl-btn-center-lr testimonial-13-area owl-btn-2 primary dots-style-3 owl-theme"
        >
          {testimonials.map((elm, i) => (
            <SwiperSlide
              key={i}
              className="item wow bounceInUp"
              data-wow-duration="2s"
              data-wow-delay={0.3 * (i + 1) + "s"}
            >
              <div className="testimonial-13">
                <div className="testimonial-text">
                  <div className="quote-left" />
                  <p>{elm.text}</p>
                </div>
                <div className="testimonial-detail clearfix">
                  <div className="testimonial-pic radius shadow">
                    <Image src={elm.image} width={100} height={100} alt="" />
                  </div>
                  <h5 className="testimonial-name m-t10 m-b5">{elm.name}</h5>
                  <span className="testimonial-position text-primary">
                    {elm.position}
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
