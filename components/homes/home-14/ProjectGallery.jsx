"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ModalVideo from "react-modal-video";
export default function ProjectGallery() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="section-full scrollSpySection" id="choose-us">
        <div className="row m-lr0">
          <div
            className="col-xl-6 col-lg-12 p-lr0 d-flex dis-tbl latest-project-info style1 bg-secondry wow fadeInLeft"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div className="align-self-center text-white">
              <div className="section-head text-white">
                <h2 className="title">Why choose us</h2>
                <p>
                  We’re continually working to change the way people think about
                  and engage with our products.
                </p>
              </div>
              <ul className="list-check white list-2 rounded border">
                <li>
                  <h4 className="m-b10">Vehicle Inspection</h4>
                  <p>
                    We understand you need a building that works for you and
                    your organisation.
                  </p>
                </li>
                <li>
                  <h4 className="m-b10">Transmission Checkup</h4>
                  <p>
                    We understand you need a building that works for you and
                    your organisation.
                  </p>
                </li>
                <li>
                  <h4 className="m-b10">Auto Repairing</h4>
                  <p>
                    We understand you need a building that works for you and
                    your organisation.
                  </p>
                </li>
                <li>
                  <h4 className="m-b10">High Performance</h4>
                  <p>
                    We understand you need a building that works for you and
                    your organisation.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-12 p-lr0 wow fadeInRight"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div className="row spno">
              <div className="col-lg-6 col-md-6 col-sm-6 bg-primary align-items-center d-flex">
                <div className="dlab-services-box text-white">
                  <h2 className="service-year">
                    32<small>year</small>
                  </h2>
                  <h3 className="title m-b0">
                    We are Building the Future and Restoring
                  </h3>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <Image
                  className="img-cover"
                  alt=""
                  src="/images/our-work/car/pic3.jpg"
                  width="500"
                  height="357"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="video-bx radius-no h100">
                  <Image
                    alt="Signature"
                    className="img-cover"
                    src="/images/our-work/car/pic4.jpg"
                    width="500"
                    height="357"
                  />
                  <div className="video-play-icon">
                    <a
                      onClick={() => setOpen(true)}
                      className="popup-youtube video bg-primary"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 bg-secondry align-items-center d-flex">
                <div className="dlab-services-box text-white">
                  <h3 className="title text-white m-b15">
                    Renting Tips &amp; Articles
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <Link
                    href={`/about-1`}
                    className="site-button btnhover19 outline white outline-2"
                  >
                    ABOUT US
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="_FRZVScwggM"
        onClose={() => setOpen(false)}
      />{" "}
    </>
  );
}
