import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <div className="section-full content-inner-1 about-bx">
      <div className="row">
        <div
          className="col-lg-6 m-b30 wow fadeInLeft"
          data-wow-duration="2s"
          data-wow-delay="0.3s"
        >
          <div className="about-box">
            <div className="dlab-img-effect zoom">
              <Image
                alt=""
                src="/images/about/about3.jpg"
                width="700"
                height="479"
              />
            </div>
          </div>
        </div>
        <div
          className="col-lg-6 m-b30 align-self-center wow fadeInRight"
          data-wow-duration="2s"
          data-wow-delay="0.3s"
        >
          <div className="m-b15">
            <h2 className="m-b0">
              About <span className="text-primary">Agriculture</span>
            </h2>
            <div className="dlab-separator bg-primary m-b0" />
          </div>
          <p>
            <strong className="text-primary">Agriculture</strong> Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            when an printer took a galley of type and scrambled it to make.
          </p>
          <Link href={`/about-1`} className="site-button btnhover14">
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
}
