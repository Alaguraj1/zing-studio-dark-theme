"use client";
import { galleryItems } from "@/data/services";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
export default function Services2() {
  return (
    <div className="section-full bg-white">
      <Swiper
        slidesPerView={4}
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
          480: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        className="portfolio-carousel-nogap owl-carousel owl-none"
      >
        {galleryItems.map((item, index) => (
          <SwiperSlide
            key={index}
            className="item wow bounceInUp"
            data-wow-duration="2s"
            data-wow-delay={item.delay}
          >
            <div className="dlab-media dlab-img-overlay1 dlab-img-effect portbox1 style1">
              <Image src={item.imageUrl} width={480} height={430} alt="" />
              <div className="overlay-bx">
                <div className="portinner">
                  <h3 className="port-title">
                    <Link href={`/services-details/${item.title}`}>
                      {item.title}
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
