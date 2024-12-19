"use client";
import { testimonials2 } from "@/data/testimonials";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  return (
    <div
      className="section-full content-inner-2 wow fadeIn"
      style={{
        backgroundImage: "url(/images/element-2.png)",
        backgroundColor: "#1e1e1e", backgroundRepeat:"no-repeat"
      }}
      data-wow-duration="2s"
      data-wow-delay="0.6s"
    >
      <div className="container ">
        <div className="section-head style2 text-center mb-0">
          <h2 className="title">CEO Speaks</h2>
          <p>Dummy Text</p>
        </div>
        <div
          style={{ display: "block" }}
          className="testimonial-num-count visible owl-num-count owl-carousel owl-btn-center-lr owl-btn-3 owl-theme"
        >
          {/* <Swiper
            slidesPerView={1}
            spaceBetween={30}
            slidesPerGroup={1}
            loop
            autoplay={{
              delay: 4000,
            }}
            speed={2500}
            modules={[Pagination, Autoplay, Navigation]}
            navigation={{
              prevEl: ".snbp41",
              nextEl: ".snbn41",
            }}
            pagination={{
              clickable: true,
              el: ".spt4",
              bulletActiveClass: "active",
              renderBullet: function (index, className) {
                return `  <button role="button" class="owl-dot ${className}">
                <span></span>
              </button>`;
              },
            }}
          >
            {testimonials2.slice(0, 3).map((elm, i) => ( */}
          <div className="item">
            <div className="testimonial-12 text-white">
              <div
                className="testimonial-pic wow fadeInUp fly-box-ho "
                data-wow-delay="1s"
              >
                <img src="/images/md-photo.png" alt="" />
              </div>
              <div
                className="testimonial-detail wow fadeInUp "
                data-wow-delay="0.3s"
              >
                <h4 className="testimonial-name m-t0 m-b5">Testing</h4>
                <span className="testimonial-position">Sub Heading</span>
                <div className="testimonial-text">
                  <p>
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ))}
            <div className="owl-dots spt4"></div>
          </Swiper> */}
          {/* <div className="owl-nav">
            <button
              style={{ zIndex: 1 }}
              type="button"
              role="presentation"
              className="owl-prev snbp41"
            >
              <i className="ti-arrow-left"></i>
            </button>
            <button
              style={{ zIndex: 1 }}
              type="button"
              role="presentation"
              className="owl-next snbn41"
            >
              <i className="ti-arrow-right"></i>
            </button>
          </div>{" "} */}
        </div>
      </div>
    </div>
  );
}
