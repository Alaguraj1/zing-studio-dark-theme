"use client";
import Link from "next/link";
import { services2 } from "@/data/services";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Services() {
  return (
    <div
      className="section-full content-inner bg-gray wow fadeIn"
      data-wow-duration="2s"
      data-wow-delay="0.6s"
    >
      <div className="container">
        <div className="section-head text-black text-center">
          <h2 className="title">Our Services</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              slidesPerGroup={2}
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
                480: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
              className="img-carousel-dots owl-theme owl-dots-none owl-carousel owl-btn-center-lr owl-btn-3"
            >
              {services2.map((service, index) => (
                <SwiperSlide className="item" key={index}>
                  <div className="service-box style1">
                    <div className="icon-xl m-b20 text-primary radius">
                      <Link
                        href={`/services-details/${service.title}`}
                        className="icon-cell"
                      >
                        <i className={service.iconClass} />
                      </Link>
                    </div>
                    <h3 className="title">{service.title}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
