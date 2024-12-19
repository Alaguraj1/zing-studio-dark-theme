import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Features() {
  return (
    <div className="section-full">
      <div className="row spno about-industry">
        <div
          className="col-lg-4 wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.3s"
        >
          <div className="dlab-img-effect zoom">
            <Image
              alt=""
              className="img-cover"
              src="/images/our-work/leather/pic1.jpg"
              width="900"
              height="550"
            />
          </div>
        </div>
        <div
          className="col-lg-4 bg-secondry text-white wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          <div className="service-box style2">
            <div>
              <h2 className="title">
                <span>Grow your </span> <br />
                business.
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Link
                href={`/about-1`}
                className="site-button btnhover21 outline white outline-2"
              >
                ABOUT US
              </Link>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.9s"
        >
          <div className="dlab-img-effect zoom">
            <Image
              alt=""
              className="img-cover"
              src="/images/our-work/leather/pic2.jpg"
              width="900"
              height="550"
            />
          </div>
        </div>
        <div
          className="col-lg-4 bg-primary text-white wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.3s"
        >
          <div className="service-box style2">
            <div>
              <h2 className="title">
                <span>Make smarter </span> <br />
                decisions.
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Link
                href={`/about-1`}
                className="site-button btnhover21 outline white outline-2"
              >
                ABOUT US
              </Link>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          <div className="dlab-img-effect zoom">
            <Image
              alt=""
              className="img-cover"
              src="/images/our-work/leather/pic3.jpg"
              width="900"
              height="550"
            />
          </div>
        </div>
        <div
          className="col-lg-4 bg-primary text-white wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.6s"
        >
          <div className="service-box style2">
            <div>
              <h2 className="title">
                <span>Understand any </span> <br />
                industry sector.
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Link
                href={`/about-1`}
                className="site-button btnhover21 outline white outline-2"
              >
                ABOUT US
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
