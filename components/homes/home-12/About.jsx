import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function About() {
  return (
    <div className="section-full content-inner bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 col-md-12 m-b30 wow fadeInLeft"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div className="our-story">
              <span>OUR STORY</span>
              <h2 className="title">
                Running a <br />
                successful business <br />
                <span className="text-primary">since 1955</span>
              </h2>
              <h4 className="title">
                Industrial engineering is a branch of engineering which deals
                with the optimization.
              </h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                Factory. Lorem Ipsum has been the Factory's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.Lorem Ipsum
                is simply dummy text of the printing and typesetting Factory.
              </p>
              <Link href={`/about-2`} className="site-button btnhover20">
                About Us
              </Link>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12 m-b30 our-story-thum wow fadeInRight"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <Image
              className="radius-sm"
              alt=""
              src="/images/about/pic13.jpg"
              width="600"
              height="722"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
