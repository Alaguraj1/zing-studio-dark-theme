"use client";
import { galleryItems } from "@/data/aboutSlides";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function About() {
  return (
    <div className="section-full content-inner exhibition-bx">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 wow fadeInLeft"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div className="relative exhibition-carousel ">
              <Swiper
                autoplay={{
                  delay: 4000,
                }}
                speed={2500}
                modules={[Pagination, Autoplay]}
                loop
                pagination={{
                  clickable: true,
                  el: ".spt5",
                  bulletActiveClass: "active",

                  renderBullet: function (index, className) {
                    return `  <button role="button" class="owl-dot ${className}">
                <span></span>
              </button>`;
                  },
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  480: {
                    slidesPerView: 1,
                  },
                  991: {
                    slidesPerView: 1,
                  },
                  1000: {
                    slidesPerView: 1,
                  },
                }}
                className="exhibition-carousel swiper-after-none owl-carousel owl-none m-b30 w-100 swiper-p-0"
                style={{ position: "static", margin: "0px" }}
              >
                {galleryItems.map((item) => (
                  <SwiperSlide key={item.id} className="item">
                    <Image
                      src={item.imgSrc}
                      width={600}
                      height={722}
                      alt={item.altText}
                    />
                  </SwiperSlide>
                ))}{" "}
                <div style={{ zIndex: 1 }} className="owl-dots spt5"></div>
              </Swiper>
              <div className="owl-carousel owl-none"></div>
            </div>
          </div>
          <div
            className="col-lg-6 m-b30 wow fadeInRight"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div className="content-bx1">
              <div className="section-head">
                <h2 className="title">
                  Quality Products <br />
                  With Sweet eggs a breads
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent molestie nec nisl eget scelerisque. Quisque placerat
                  suscipit eros, eu tincidunt tellus blandit vel. Donec
                  pellentesque dapibus interdum. Mauris et tellus congue, rutrum
                  neque a, varius felis.
                </p>
              </div>
              <Link
                href={`/contact-2`}
                className="site-button btnhover10 black m-r10 m-b10"
              >
                Contact us
              </Link>
              <Link
                href={`/portfolio-grid-2`}
                className="site-button btnhover10 black m-b10"
              >
                View portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
