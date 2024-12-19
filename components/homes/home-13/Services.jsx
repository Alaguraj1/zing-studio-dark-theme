"use client";
import { services4 } from "@/data/services";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
export default function Services() {
  return (
    <div
      className="section-full bg-white content-inner-2"
      id="about-us"
      style={{ backgroundImage: "url(/images/background/bg11.jpg)" }}
    >
      <div className="container">
        <div className="section-head text-black text-center">
          <h2 className="title">Simple Cost-Efficient Mining Solutions</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
        </div>
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
            1024: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          className="img-carousel owl-carousel owl-theme owl-none owl-dots-black-big service-box-4-area owl-dots-none owl-btn-center-lr owl-loade m-b30"
        >
          {services4.map((service, index) => (
            <SwiperSlide
              key={index}
              className="item wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay={service.delay}
            >
              <div className="service-box-4 text-center">
                <div className="service-images m-b15">
                  <Image src={service.image} width={400} height={400} alt="" />
                  <i className={service.iconClass} />
                </div>
                <div className="service-content">
                  <h6 className="title">
                    <Link href={`/services-details/${service.title}`}>
                      {service.title}
                    </Link>
                  </h6>
                  <p>{service.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center">
          <Link
            href={`/services-1`}
            className="site-button btnhover13 button-md"
          >
            See all Services
          </Link>
        </div>
      </div>
    </div>
  );
}
