"use client";
import { testimonials5 } from "@/data/testimonials";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <div className="section-full content-inner ">
      <div className="container">
        {/* <div className="sort-title clearfix text-center" style={{marginBottom:"50px"}}>
          <h4>Our Vision</h4>
          <p style={{ marginBottom: "0px" }}>Dummy Text</p>
        </div> */}

        <div className="section-head style2 text-center">
          <h2 className="title">Our Vision</h2>
          {/* <p>Innovating solutions that inspire growth and transform ideas into reality.
          Driven by excellence, we aim to shape a better digital future.</p> */}
        </div>

        {/* <div className="section-head style2 text-center">
          <h4 className="title">Our Vision</h4>
          <p>
            There are many variations of passages of Lorem Ipsum typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div> */}
        {/* <Swiper
          slidesPerView={2}
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
            991: {
              slidesPerView: 1,
            },
          }}
          className="testimonial-five owl-carousel owl-btn-center-lr owl-btn-2 primary dots-style-3 owl-theme"
        >
          {testimonials5.map((testimonial, index) => ( */}
        <div
          className="swiper-slide item wow fadeInUp"
          data-wow-delay="0.3s"
          // key={index}
        >
          <div className="testimonial-14 quote-left">
            <div className="testimonial-text">
              <p>
                Get customized solutions based on your business goals – no
                matter your size or industry. With successful clients ranging
                from small businesses to Fortune 1000s, you’re in good company.
              </p>
            </div>
          </div>
        </div>
        {/* //   ))}
        // </Swiper> */}
      </div>
    </div>
  );
}
