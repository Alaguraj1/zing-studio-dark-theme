"use client";
import { projectData } from "@/data/projects";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Projects() {
  return (
    <div className="section-full content-inner-1 frame-project-area">
      <div className="section-head text-center">
        <h2 className="title">Project And Portfolio</h2>
        <div className="dlab-separator bg-primary m-b0" />
      </div>
      <Swiper
        slidesPerView={3}
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
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        className="owl-project owl-carousel owl-theme owl-btn-center-lr"
      >
        {projectData.map((project, index) => (
          <SwiperSlide
            className="item wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay={project.delay}
            key={index}
          >
            <div className="project-bx">
              <div className="media dlab-img-effect zoom">
                <Image
                  src={project.image}
                  width={500}
                  height={349}
                  alt={project.title}
                />
              </div>
              <div className="info">
                <h4 className="title">
                  <Link href={`/portfolio-details/${project.title}`}>
                    {project.title}
                  </Link>
                </h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="m-t40 text-center">
        <Link href={`/portfolio-grid-2`} className="site-button btnhover14">
          View All Portfolio
        </Link>
      </div>
    </div>
  );
}
