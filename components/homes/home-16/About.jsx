import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <section
      className="content-inner-4 ev-aboutus"
      style={{
        backgroundImage: "url(/images/background/event/bg1.png)",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="ev-aboutus-media">
              <span className="ev-about3">
                <Image
                  alt=""
                  src="/images/about/event/about3.jpg"
                  width="220"
                  height="220"
                />
              </span>
              <span className="ev-about1">
                <Image
                  alt=""
                  src="/images/about/event/about.jpg"
                  width="500"
                  height="825"
                />
              </span>
              <span className="ev-about2">
                <Image
                  alt=""
                  src="/images/about/event/about2.jpg"
                  width="170"
                  height="291"
                />
              </span>
            </div>
          </div>
          <div className="col-lg-6 ev-about-content text-white">
            <div className="section-head style-2">
              <h2 className="title">
                About
                <br />
                The Event
              </h2>
            </div>
            <ul className="ev-list mb-4">
              <li>
                <i className="fas fa-certificate" />
                Security and privacy
              </li>
              <li>
                <i className="fas fa-certificate" />
                Artificial intelligence
              </li>
              <li>
                <i className="fas fa-certificate" />
                New media
              </li>
              <li>
                <i className="fas fa-certificate" />
                Cryptocurrency
              </li>
            </ul>
            <p className="mb-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less
            </p>
            <a href="#" className="site-button-secondry btnhover20 radius-xl">
              About Us
              <i className="fas fa-angle-double-right ms-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
