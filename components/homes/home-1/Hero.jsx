import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div
      className="hero-sec react-parallax overflow-hidden"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <Image
        className="react-parallax-bgimage"
        alt=""
        style={{
          position: "absolute",
          left: "0%",
          top: 0,
          width: "100%",

          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          height: 898,
          width: "100%",
          filter: "none",
        }}
        src="/images/main-slider/slide8-bg.jpg"
        width={1920}
        height={1024}
        priority
      />
      <div className="react-parallax-content" style={{ position: "relative" }}>
        <div className="hero-section pt-50 home-bnr1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="hero-content">
                  <h1 className="title">We are industry Factory solution</h1>
                  <div className="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the.
                  </div>
                  <div className="buttons">
                    <Link href="/services-1">Read More</Link>
                    <Link href="/about-1">About Us</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <Image
                  alt=""
                  src="/images/main-slider/slide7-main.png"
                  width="965"
                  height="894"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
