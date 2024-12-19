"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
const portfolioImages = [
  {
    src: "/images/portfolio/construct/image_1.jpg",
    alt: "",
  },
  {
    src: "/images/portfolio/construct/image_2.jpg",
    alt: "",
  },
  {
    src: "/images/portfolio/construct/image_3.jpg",
    alt: "",
  },
];

export default function Projects1() {
  return (
    <div
      className="section-full bg-white content-inner-2 project-slider"
      style={{
        backgroundImage: "url(/images/background/bg11.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
      }}
    >
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 p-lr0">
            <Swiper
              slidesPerView={1.5}
              spaceBetween={30}
              slidesPerGroup={1}
              loop
              autoplay={{
                delay: 4000,
              }}
              speed={2500}
              modules={[Autoplay, Navigation]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                480: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 1,
                },
                1000: {
                  slidesPerView: 1.5,
                },
              }}
              navigation={{
                prevEl: ".snbp3",
                nextEl: ".snbn3",
              }}
              className="project-carousel-2 owl-carousel owl-btn-center-lr owl-btn-1 black wow fadeInLeft"
              data-wow-delay="0.2s"
              data-wow-duration="2s"
            >
              {portfolioImages.map((image, index) => (
                <SwiperSlide className="item" key={index}>
                  <div className="dlab-media dlab-img-overlay1 dlab-img-effect zoom">
                    <Image
                      src={image.src}
                      width={500}
                      height={500}
                      alt={image.alt}
                    />
                  </div>
                </SwiperSlide>
              ))}
              <div className="owl-nav">
                <button
                  style={{ zIndex: 1 }}
                  type="button"
                  role="presentation"
                  className="owl-prev snbp3 swiper-button-prev previousButton2"
                >
                  <i className="fa fa-angle-left"></i>
                </button>
                <button
                  style={{ zIndex: 1 }}
                  type="button"
                  role="presentation"
                  className="owl-next snbn3 swiper-button-next nextButton2"
                >
                  <i className="fa fa-angle-right"></i>
                </button>
              </div>
            </Swiper>
          </div>
          <div className="col-lg-6 col-md-6">
            <div
              className="about-content wow fadeIn"
              data-wow-delay="0.2s"
              data-wow-duration="2s"
            >
              <div className="section-head style2">
                <h2 className="title">
                  Our Latest Project Industrial <br />
                  Style Apartment
                </h2>
                <p>
                  Praesent pharetra orci odio, ut mattis tellus ullamcorper
                  ornare. Suspendisse ullamcorper metus in erat viverra,
                  vehicula pharetra dolor accumsan. In arcu ex, rutrum finibus
                  malesuada
                </p>
              </div>
              <div className="m-b30">
                <ul className="list-details">
                  <li>
                    <strong>Clients:</strong>
                    <span>Ethan Hunt</span>
                  </li>
                  <li>
                    <strong>Completion:</strong>
                    <span>February 5th, 2017</span>
                  </li>
                  <li>
                    <strong>Project Type:</strong>
                    <span>Villa, Residence</span>
                  </li>
                </ul>
              </div>
              <div className="">
                <Link
                  href={`/portfolio-grid-2`}
                  className="site-button btnhover20"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
