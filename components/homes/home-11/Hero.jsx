import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div
      className="react-parallax "
      style={{ position: "relative", overflow: "hidden" }}
    >
      <Image
        className="react-parallax-bgimage"
        src="/images/main-slider/slide11-1.jpg"
        alt=""
        width={1920}
        height={1024}
        style={{
          position: "absolute",
          left: "0%",
          top: "0px",
          width: "100%",

          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          height: "100%",
          width: "100%",
          filter: "none",
        }}
      />
      <div
        className="hero-sec react-parallax-content"
        style={{ position: "relative" }}
      >
        <div className="hero-section overlay2 relative home-slider-11">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="content-wrapper height-70">
                  <div className="hero-content text-center content-center">
                    <div className="subtitle style3">
                      Building up vision leading future
                    </div>
                    <h1 className="title text-center style3">
                      Nuclear <br /> Power Plants
                    </h1>
                    <div className="subtitle fs-16">
                      Great Lessons You Can Learn From Nuclear Plant
                    </div>
                    <Link className="site-button" href="/services-1">
                      our services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
