"use client";

import React, { useState } from "react";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import { galleryItems, galleryItems2 } from "@/data/gallery";
export default function Gallery() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="section-full content-inner-1">
        <div className="row gallery-bx">
          <div className="col-lg-6 m-b30">
            <div className="section-head">
              <h2 className="title">Video Gallery</h2>
              <div className="dlab-separator bg-primary m-b0" />
            </div>
            <div className="dlab-gallery-listing row sp15 gallery video-gallery">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className="col-lg-4 col-md-4 col-sm-4 col-6 wow bounceInUp"
                  data-wow-duration="2s"
                  data-wow-delay={item.delay}
                >
                  <div className="dlab-box m-b15">
                    <div className="dlab-img-overlay4 dlab-img-effect zoom">
                      <a href="#">
                        <Image alt="" src={item.src} width={300} height={269} />
                      </a>
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <a
                            onClick={() => setOpen(true)}
                            className="popup-youtube video"
                          >
                            <i className="fas fa-play" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="m-t20">
              <a href="#" className="site-button btnhover14">
                View All Video
              </a>
            </div>
          </div>
          <div className="col-lg-6 m-b30">
            <div className="section-head">
              <h2 className="title">Image Gallery</h2>
              <div className="dlab-separator bg-primary m-b0" />
            </div>
            <div
              id="lightgallery"
              className="dlab-gallery-listing row sp15 gallery"
            >
              {galleryItems2.map((item, index) => (
                <div
                  key={index}
                  className="col-lg-4 col-md-4 col-sm-4 col-6 wow bounceInUp"
                  data-wow-duration="2s"
                  data-wow-delay={item.delay}
                >
                  <div className="dlab-box m-b15">
                    <div className="dlab-img-overlay4 dlab-img-effect zoom">
                      <a href="#">
                        <Image alt="" src={item.src} width={300} height={269} />
                      </a>
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <span
                            className="check-km"
                            data-exthumbimage={item.thumbSrc}
                            data-src={item.src}
                            title={item.title}
                          >
                            <i className="fas fa-search icon-bx-xs" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="m-t20">
              <a href="#" className="site-button btnhover14">
                View All Image
              </a>
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
