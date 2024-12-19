"use client";
import { projects } from "@/data/projects";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Projects() {
  return (
    <div
      className="section-full content-inner-2 bg-gray wow fadeInUp"
      data-wow-duration="2s"
      data-wow-delay="0.4s"
    >
      <div className="container">
        <div className="section-head text-black text-center">
          <h2 className="title">Our Project</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12">
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
              className="img-carousel-dots-nav owl-theme owl-dots-none owl-carousel owl-btn-center-lr owl-btn-3"
            >
              {projects.map((item, index) => (
                <SwiperSlide className="item" key={index}>
                  <div className="dlab-box project-bx">
                    <div className="dlab-media radius-sm dlab-img-overlay1 dlab-img-effect zoom">
                      <Link href={`/portfolio-details/${item.title}`}>
                        <Image
                          src={item.imgSrc}
                          width={500}
                          height={700}
                          alt={item.title}
                        />
                      </Link>
                    </div>
                    <div className="dlab-info">
                      <h5 className="dlab-title">
                        <Link href={`/portfolio-details/${item.title}`}>
                          {item.title}
                        </Link>
                      </h5>
                    </div>
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
