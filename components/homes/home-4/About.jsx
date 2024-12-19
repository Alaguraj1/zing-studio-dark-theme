"use client";
import { projectItems, storyItems } from "@/data/aboutSlides";
import { useState } from "react";
import Link from "next/link";
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
const swiperThumbOptions = {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  modules: [Thumbs],
  slideToClickedSlide: true,
};
const swiperOptions2 = {
  slidesPerView: 1,
  loop: true,
  // effect: "fade",
  modules: [Thumbs],
  loopedslides: 4,
};
export default function About() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div
      className="section-full content-inner bg-white wow fadeIn"
      data-wow-duration="2s"
      data-wow-delay="0.4s"
    >
      <div className="container">
        <div className="on-show-slider">
          <Swiper
            id="sync2"
            className="owl-carousel owl-theme owl-none owl-dots-none project-list"
            watchSlidesProgress
            onSwiper={setThumbsSwiper}
            {...swiperThumbOptions}
            breakpoints={{
              800: {
                slidesPerView: 4,
              },
              0: {
                slidesPerView: 2,
              },
            }}
          >
            {projectItems.map((item, index) => (
              <SwiperSlide className="item" key={index}>
                <div className={`project-owbx ${item.active ? "active" : ""}`}>
                  <i className={item.iconClass} />
                  <h4 className="title">{item.title}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            id="sync1"
            className="owl-carousel owl-theme owl-btn-center-lr m-b5 owl-dots-none owl-btn-3 primary"
            thumbs={{ swiper: thumbsSwiper }}
            {...swiperOptions2}
          >
            {storyItems.map((item, index) => (
              <SwiperSlide className="item" key={index}>
                <div className="row align-items-center">
                  {item.isImageFirst ? (
                    <>
                      <div className="col-lg-6 col-md-6 m-b30">
                        <Image
                          src={item.imgSrc}
                          width={600}
                          height={800}
                          className="radius-sm"
                          alt={item.imgAlt}
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 m-b30">
                        <div className="our-story content-bx1">
                          <span>OUR STORY</span>
                          <h2 className="title">
                            {item.title.split(" ").slice(0, 3).join(" ")}
                            <br />
                            {item.title.split(" ").slice(3, -1).join(" ")}
                            <span className="text-primary">
                              {" "}
                              {item.title.split(" ").slice(-1)}{" "}
                            </span>
                          </h2>
                          <h4 className="title">{item.subTitle}</h4>
                          <p>{item.text}</p>
                          <Link
                            href={`/about-2`}
                            className="site-button btnhover16"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-lg-6 col-md-6 m-b30">
                        <div className="our-story">
                          <span>OUR STORY</span>
                          <h2 className="title">
                            {item.title.split(" ").slice(0, 3).join(" ")}
                            <br />
                            {item.title.split(" ").slice(3, -1).join(" ")}
                            <span className="text-primary">
                              {" "}
                              {item.title.split(" ").slice(-1)}{" "}
                            </span>
                          </h2>
                          <h4 className="title">{item.subTitle}</h4>
                          <p>{item.text}</p>
                          <Link
                            href={`/about-2`}
                            className="site-button btnhover16"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 m-b30">
                        <Image
                          src={item.imgSrc}
                          width={600}
                          height={800}
                          className="radius-sm"
                          alt={item.imgAlt}
                        />
                      </div>
                    </>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
