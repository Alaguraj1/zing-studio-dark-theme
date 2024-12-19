"use client";
import { serviceItems3 } from "@/data/services";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function Services2() {
  return (
    <div className="section-full bg-gray content-inner-2 about-carousel-ser">
      <div className="container">
        <div className="section-head text-center">
          <h2 className="title">Our Services</h2>
          <p>
            There are many variations of passages of Lorem Ipsum typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={2}
          slidesPerGroupAuto
          initialSlide={4}
          loop
          watchSlidesProgress
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
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="about-ser-carousel owl-carousel owl-theme owl-btn-center-lr owl-dots-primary-full owl-dots-none owl-btn-3 overflow-visible"
        >
          {serviceItems3.map((item, i) => (
            <SwiperSlide
              key={i}
              className="item wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay={item.delay}
            >
              <div className="dlab-box service-media-bx">
                <div className="dlab-media dlab-img-effect zoom">
                  <Link href={`/services-details/${item.title}`}>
                    <Image
                      src={item.imgSrc}
                      width={700}
                      height={500}
                      alt={item.title}
                    />
                  </Link>
                </div>
                <div className="dlab-info text-center">
                  <h2 className="dlab-title">
                    <Link href={`/services-details/${item.title}`}>
                      {item.title}
                    </Link>
                  </h2>
                  <p>{item.description}</p>
                  <Link
                    href={`/services-details/${item.title}`}
                    className="site-button btnhover15"
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
