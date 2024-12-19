import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="hero-sec hero-section relative full-height video-section overlay3 home-slider-12">
      <video
        autoPlay
        loop
        muted
        className="beer-video"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src="/video/slide12-video.mp4" type="video/mp4" />
        <source src="/video/slide12-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content text-center content-center">
        <Image
          alt=""
          className="beer-icon"
          src="/images/main-slider/slide-11.png"
          width="80"
          height="80"
        />
        <span className="seperator" />
        <h1 className="title text-center style4">BEER FACTORY</h1>
        <div className="description ">
          The concept of a traditional restaurant reimagined in a modern way.{" "}
        </div>
        <Link className="site-button hover-bg-white-btn" href="/contact-1">
          <i className="la la-phone icon" />
          contact us
        </Link>
        <Link className="site-button hover-bg-white-btn" href="/services-1">
          <i className="la la-file-text icon" />
          our services
        </Link>
      </div>
      <ul className="social-icons">
        <li>
          <a href="#">
            <i className="fa fa-facebook" />
          </a>
        </li>{" "}
        <li>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>
        </li>{" "}
        <li>
          <a href="#">
            <i className="fa fa-instagram" />
          </a>
        </li>
      </ul>
    </div>
  );
}
