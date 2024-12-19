import React from "react";
import Image from "next/image";
export default function Hero() {
  return (
    <div
      className="hero-sec hero-section relative home-slider-13"
      style={{
        backgroundImage: 'url("/images/main-slider/slide13-bg.jpg")',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="content-wrapper full-height">
              <div className="hero-content text-center ">
                <Image
                  className="worker-pic bottom"
                  alt=""
                  src="/images/main-slider/slide13-person.png"
                  width="682"
                  height="842"
                />
                <Image
                  className="worker-frame bottom"
                  alt=""
                  src="/images/main-slider/slide13-frame.png"
                  width="529"
                  height="742"
                />
                <h2 className="big-text bottom">Mining</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
