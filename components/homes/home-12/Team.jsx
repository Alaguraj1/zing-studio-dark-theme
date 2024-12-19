"use client";
import { teamData } from "@/data/team";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function Team() {
  return (
    <div className="section-full content-inner bg-gray">
      <div className="container">
        <div className="section-head style2 text-center">
          <h2 className="title">Our Team</h2>
          <p>
            There are many variations of passages of Lorem Ipsum typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
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
          centeredSlides
          modules={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
          className="team-carousel centeredSlides owl-carousel owl-btn-3 owl-theme owl-btn-center-lr"
        >
          {teamData.map((elm, i) => (
            <SwiperSlide
              key={i}
              className="item wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay={elm.delay}
            >
              <div className="dlab-box m-b30 dlab-team7">
                <div className="dlab-media">
                  <Link href={`/team-1`}>
                    <Image alt="" src={elm.image} width={350} height={350} />
                  </Link>
                </div>
                <div className="dlab-info">
                  <h4 className="dlab-title">
                    <Link href={`/team-1`}>{elm.name}</Link>
                  </h4>
                  <span className="dlab-position">{elm.position}</span>
                  <ul className="dlab-social-icon">
                    <li>
                      <a
                        className="site-button circle-sm gray-light fab fa-facebook-f"
                        href="#"
                      ></a>
                    </li>{" "}
                    <li>
                      <a
                        className="site-button circle-sm gray-light fab fa-twitter"
                        href="#"
                      ></a>
                    </li>{" "}
                    <li>
                      <a
                        className="site-button circle-sm gray-light fab fa-linkedin-in"
                        href="#"
                      ></a>
                    </li>{" "}
                    <li>
                      <a
                        className="site-button circle-sm gray-light fab fa-pinterest-p"
                        href="#"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
