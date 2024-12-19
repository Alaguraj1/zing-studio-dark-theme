"use client";
import { teamData } from "@/data/team";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Team() {
  return (
    <div className="section-full content-inner-1">
      <div className="section-head text-center">
        <h2 className="title">Our Team</h2>
        <div className="dlab-separator bg-primary m-b0" />
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={2}
        loop
        autoplay={{
          delay: 4000,
        }}
        speed={2500}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          700: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        pagination={{
          clickable: true,
          el: ".spt7",
          bulletActiveClass: "active",
          renderBullet: function (index, className) {
            return `  <button role="button" class="owl-dot ${className}">
                <span></span>
              </button>`;
          },
        }}
        className="owl-team owl-carousel dlab-team11-area owl-theme owl-btn-center-lr dots-theme"
      >
        {teamData.map((member, index) => (
          <SwiperSlide
            className="item wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay={member.delay}
            key={index}
          >
            <div className="dlab-box dlab-team11">
              <div className="dlab-media dlab-img-effect zoom">
                <Link href={`/team-1`}>
                  <Image
                    src={member.image}
                    width={350}
                    height={350}
                    alt={member.name}
                  />
                </Link>
              </div>
              <div className="dlab-info">
                <h4 className="dlab-title">
                  <Link href={`/team-1`}>{member.name}</Link>
                </h4>
                <span className="dlab-position">{member.position}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div style={{ zIndex: 1 }} className="owl-dots spt7"></div>
      </Swiper>
    </div>
  );
}
