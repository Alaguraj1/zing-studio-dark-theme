"use client";

import { projects2 } from "@/data/projects";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
export default function Projects3() {
  return (
    <div
      className="section-full bg-white content-inner-1 project-area bg-img-fix centeredSlides"
      style={{
        backgroundImage: "url(/images/background/bg9.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div
          className="section-head text-white style2 wow fadeInRight"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          <h2 className="title m-b10">The Luxury Residence In Forest</h2>
          <p>
            Meh synth Schlitz, tempor duis single-origin coffee ea next level
            ethnic fingerstache <br />
            fanny pack nostrud. Photo booth anim 8-bit hella,
          </p>
          <Link
            href={`/contact-1`}
            className="site-button btnhover20 m-r10 m-b10"
          >
            Contact Us
          </Link>
          <Link
            href={`/portfolio-grid-2`}
            className="site-button btnhover20 m-b10"
          >
            View Portfolio
          </Link>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          loop
          autoplay={{
            delay: 4000,
          }}
          speed={2500}
          modules={[Autoplay, Navigation]}
          navigation={{ prevEl: ".snbp34", nextEl: ".snbn34" }}
          className="project-carousel-1 owl-carousel wow fadeInUp pb-4"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          {projects2.map((project, index) => (
            <SwiperSlide className="item" key={index}>
              <div className="project-info-box">
                <div className="project-media">
                  <Image src={project.src} width={1704} height={696} alt="" />
                </div>
                <div className="project-content">
                  <ul className="list-details">
                    <li>
                      <strong>Clients:</strong>
                      <span>{project.client}</span>
                    </li>
                    <li>
                      <strong>Completion:</strong>
                      <span>{project.completionDate}</span>
                    </li>
                    <li>
                      <strong>Project Type:</strong>
                      <span>{project.projectType}</span>
                    </li>
                    <li>
                      <strong>Architects:</strong>
                      <span>{project.architects}</span>
                    </li>
                    <li>
                      <Link
                        href={`/portfolio-details/${project.title}`}
                        className="site-button btnhover20 m-t10"
                      >
                        View Portfolio
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="owl-nav">
            <button
              type="button"
              role="presentation"
              style={{ zIndex: 2 }}
              className="owl-prev snbp34"
            >
              <i className="la la-arrow-left"></i> Prev
            </button>
            <button
              type="button"
              role="presentation"
              style={{ zIndex: 2 }}
              className="owl-next snbn34"
            >
              Next <i className="la la-arrow-right"></i>
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
