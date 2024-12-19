"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
const services = [
  {
    title: "Agricultural Processing",
    imgSrc: "/images/our-services/pic3.jpg",
    link: "/about-1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the book.",
  },
  {
    title: "Material Engineering",
    imgSrc: "/images/our-services/pic2.jpg",
    link: "/about-1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the book.",
  },
  {
    title: "Petroleum Engineering",
    imgSrc: "/images/our-services/pic1.jpg",
    link: "/about-1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the book.",
  },
];

export default function Hero() {
  return (
    <div className="section-full bg-gray content-inner about-carousel-ser">
      <div className="container">
        <div className="section-head text-center">
          <h2 className="title">
            Why Customer Love To <br />
            <span className="text-primary">Choose Us</span>
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <Swiper
          modules={[Autoplay]}
          loop
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
          autoplay={{
            delay: 4000,
          }}
          speed={2500}
          className="about-ser-carousel owl-carousel owl-theme owl-btn-center-lr owl-dots-primary-full owl-btn-3 m-b30 wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          {services.map((service, index) => (
            <SwiperSlide className="item" key={index}>
              <div className="dlab-box service-media-bx">
                <div className="dlab-media">
                  <Link href={service.link}>
                    <Image
                      className="lazy"
                      alt=""
                      src={service.imgSrc}
                      width="500"
                      height="357"
                    />
                  </Link>
                </div>
                <div className="dlab-info text-center">
                  <h2 className="dlab-title">
                    <Link href={service.link}>{service.title}</Link>
                  </h2>
                  <p>{service.description}</p>
                  <Link href={service.link} className="site-button btnhover13">
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
