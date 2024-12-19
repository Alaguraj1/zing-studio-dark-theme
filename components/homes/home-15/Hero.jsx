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
        src="/images/main-slider/slide15-bg.jpg"
        width={1920}
        height={1024}
        alt=""
        style={{
          position: "absolute",
          left: "0%",

          top: 0,

          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          height: "100%",
          width: "100%",
          filter: "none",
        }}
      />
      <div className="react-parallax-content" style={{ position: "relative" }}>
        <div className="hero-section overlay relative home-slider-15" id="para">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="content-wrapper full-height">
                  <div className="hero-content text-center content-center">
                    <div className="subtitle text-primary style2">
                      Value Creation Form Waste{" "}
                    </div>
                    <h1 className="title text-center">
                      Plastic Waste <br /> Managment &amp; Recycling
                    </h1>
                    <div className="subtitle">
                      Powering Progress Through Plastic
                    </div>
                    <Link className="style2 bg-primary" href="/services-1">
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
