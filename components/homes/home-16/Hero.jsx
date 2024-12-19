import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div
      className="event-banner"
      style={{ backgroundImage: "url(/images/main-slider/event/slide1.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-white">
            <div className="ev-content">
              <h1 className="dz-title">
                Events organized by our company are just
                <span className="text-yellow">great!</span>
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the.
              </p>
              <Link
                href="/about-1"
                className="site-button-secondry btnhover20 radius-xl"
              >
                About Us
                <i className="fas fa-angle-double-right ms-2" />
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="event-bnr-media">
              <span className="ev-img1">
                <Image
                  alt=""
                  src="/images/main-slider/event/img2.jpg"
                  width="500"
                  height="597"
                />
              </span>
              <div className="event-bnr-media-in">
                <span className="ev-img2">
                  <Image
                    alt=""
                    src="/images/main-slider/event/img1.jpg"
                    width="700"
                    height="700"
                  />
                </span>
                <span className="ev-img3">
                  <Image
                    alt=""
                    src="/images/main-slider/event/img3.jpg"
                    width="600"
                    height="660"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
