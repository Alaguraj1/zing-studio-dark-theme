"use client";
import { serviceItems2 } from "@/data/services";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Services() {
  return (
    <div
      className="section-full content-inner-2 bg-gray wow fadeIn"
      data-wow-duration="2s"
      data-wow-delay="0.6s"
      style={{ backgroundImage: "url(/images/overlay/brilliant.png)" }}
    >
      <div className="container">
        <div className="section-head text-black text-center">
          <h2 className="title">Why Solar Energy is Best</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12">
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
              className="img-carousel-dots owl-theme owl-dots-none owl-carousel owl-btn-center-lr owl-btn-3"
            >
              {serviceItems2.map((item) => (
                <SwiperSlide key={item.id} className="item">
                  <div className="service-box style4">
                    <div className="icon-lg m-b5 text-primary radius">
                      <a href="#" className="icon-cell">
                        <i className={item.iconClass} />
                      </a>
                    </div>
                    <h3 className="title">{item.title}</h3>
                    <div className="no">{item.number}</div>
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
