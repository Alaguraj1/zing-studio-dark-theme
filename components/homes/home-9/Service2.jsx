"use client";
import { servicesData2 } from "@/data/services";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Service2() {
  return (
    <div className="section-full bg-gray about-carousel-ser content-inner">
      <div className="container">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroupAuto
          loop
          initialSlide={4}
          autoplay={{
            delay: 4000,
          }}
          speed={2500}
          watchSlidesProgress
          modules={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="about-ser-carousel owl-carousel owl-theme  overflow-visible owl-btn-center-lr owl-dots-primary-full owl-btn-3 owl-loaded owl-drag"
        >
          {servicesData2.map((service, index) => (
            <SwiperSlide
              className="item wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay={service.animationDelay}
              key={index}
            >
              <div className="icon-bx-wraper service-box style6">
                <div className="dlab-media m-b20">
                  <Image
                    src={service.image}
                    width={700}
                    height={500}
                    alt={service.title}
                  />
                  <div className="icon-bx-sm icon-bx bg-primary icon-up">
                    <a href="#" className="icon-cell">
                      <i className={service.iconClass} />
                    </a>
                  </div>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title text-capitalize">
                    <Link href={`/about-1`}>{service.title}</Link>
                  </h4>
                  <p>{service.description}</p>
                  <Link
                    href={`/about-1`}
                    className="site-button btnhover17 radius-no"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
