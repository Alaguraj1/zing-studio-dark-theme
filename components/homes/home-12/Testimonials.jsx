"use client";
import { testimonials6 } from "@/data/testimonials";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  return (
    <div className="section-full content-inner-2 bg-gray">
      <div className="container">
        <div className="section-head style2 text-center">
          <h2 className="title">Our Client</h2>
          <p>
            There are many variations of passages of Lorem Ipsum typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        {/* Image Carousel start */}
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={2}
          slidesPerGroupAuto
          loop
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
          autoplay={{
            delay: 4000,
          }}
          speed={2500}
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            el: ".spt1",
            bulletActiveClass: "active",
            renderBullet: function (index, className) {
              return `  <button role="button" class="owl-dot ${className}">
                <span></span>
              </button>`;
            },
          }}
          className="testimonial-two-dots owl-carousel owl-btn-center-lr owl-btn-3 owl-theme owl-dots-primary-full"
        >
          {testimonials6.map((testimonial, i) => (
            <SwiperSlide
              key={i}
              className="item p-a5 wow fadeInUp"
              data-wow-duration={testimonial.duration}
              data-wow-delay={testimonial.delay}
            >
              <div className="testimonial-9">
                <div className="testimonial-pic radius style1">
                  <Image
                    src={testimonial.image}
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
          <div className="owl-dots spt1"></div>
        </Swiper>
      </div>
    </div>
  );
}
