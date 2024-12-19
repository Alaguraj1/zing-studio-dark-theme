"use client";
import { portfolioData } from "@/data/projects";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function Projects() {
  return (
    <div className="section-full bg-white">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        slidesPerGroup={1}
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
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 2,
          },
        }}
        className="project-carousel centeredSlides owl-btn-center-lr owl-carousel"
      >
        {portfolioData.map((portfolioItem, index) => (
          <SwiperSlide
            className="item wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay={portfolioItem.delay}
            key={index}
          >
            <div className="dlab-box portfolio-style1">
              <div className="dlab-media dlab-img-overlay1 dlab-img-effect">
                <Link href={`/services-details/${portfolioItem.title}`}>
                  <Image
                    src={portfolioItem.image}
                    width={700}
                    height={500}
                    alt={portfolioItem.title}
                  />
                </Link>
              </div>
              <div className="portfolio-info">
                <h4 className="title">
                  <Link href={`/services-details/${portfolioItem.title}`}>
                    {portfolioItem.title}
                  </Link>
                </h4>
                <p>{portfolioItem.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
