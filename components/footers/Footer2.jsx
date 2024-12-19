"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { posts3 } from "@/data/blogs";
import {
  footerLinks,
  footerLinks_1,
  footerLinks_2,
  socialLinks,
} from "@/data/footerLinks";
export default function Footer2(props) {
  const { contactSection } = props;
  console.log("✌️contactSection --->", contactSection);

  return (
    <footer className="site-footer style2">
      {/* Footer Info */}
      {contactSection == true ||
        (contactSection == "true" && (
          <div
            className="section-full p-t50 p-b20 bg-primary text-white overlay-primary-dark footer-info-bar wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInLeft">
                  <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                    <div className="icon-content">
                      <h5 className="dlab-tilte">
                        <span className="icon-sm">
                          <i className="ti-location-pin" />
                        </span>
                        Company Address
                      </h5>
                      <p>
                        5A-1, 4th Street, Chinthamani Nagar, K.K.Pudur, Saibaba
                        Colony, Coimbatore – 641 038. Tamil Nadu, India.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp">
                  <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                    <div className="icon-content">
                      <h5 className="dlab-tilte">
                        <span className="icon-sm">
                          <i className="ti-email" />
                        </span>
                        E-mail
                      </h5>
                      <p className="m-b0 ">
                        <Link
                          href="mailto:support@irepute.in"
                          style={{ color: "black" }}
                        >
                          support@irepute.in
                        </Link>
                      </p>
                      {/* <p className="op7">
                    <a href="mailto:someone@example.com">company@example.com</a>
                  </p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInRight">
                  <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                    <div className="icon-content">
                      <h5 className="dlab-tilte">
                        <span className="icon-sm">
                          <i className="ti-mobile" />
                        </span>
                        Phone Number
                      </h5>
                      <p className="m-b0">
                        Mobile :{" "}
                        <a href="tel:04224980307" style={{ color: "black" }}>
                          +91 (422) 498 0307
                        </a>
                      </p>
                      {/* <p className="op7">
                    Phone : <a href="tel:+4733378901">+0 1234 5678 90</a>
                  </p> */}
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
              <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm br-col-w1">
                <div className="icon-content">
                  <h5 className="dlab-tilte">
                    <span className="icon-sm">
                      <i className="ti-alarm-clock" />
                    </span>
                    Office Hours
                  </h5>
                  <p className="m-b0">Mon To Sat : 09.00AM - 7.00PM</p>
                  <p>Sunday : Close</p>
                </div>
              </div>
            </div> */}
              </div>
            </div>
          </div>
        ))}

      {/* Footer Info End */}
      {/* Footer Top */}
      <div className="footer-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="widget widget_about">
                <div className="footer-logo logo-dark">
                  <Link href={`/`}>
                    <img
                      alt=""
                      src="/images/logo.png"
                      width="258"
                      height="75"
                    />
                  </Link>
                </div>
                <p>
                  Cost effective , effective campaigns that generates reliable
                  quality leads, enhances marketing and enables excellent
                  digital `brand promotions and positioning.
                </p>
                <div className="widget widget_getintuch">
                  <ul>
                    <li>
                      <i className="ti-location-pin" /> 5A-1, 4th Street,
                      Chinthamani Nagar,
                      <br /> K.K.Pudur, Saibaba Colony,
                      <br /> Coimbatore – 641 038.
                      <br /> Tamil Nadu, India.
                    </li>
                    <li>
                      <i className="ti-mobile" />
                      <a href="tel:04224980307" style={{ color: "#747477" }}>
                        +91 (422) 498 0307
                      </a>
                      {/* (24/7
                      Support Line) */}
                    </li>
                    <li>
                      <i className="ti-email" />
                      <a
                        href="mailto:support@irepute.in"
                        style={{ color: "#747477" }}
                      >
                        support@irepute.in
                      </a>
                    </li>
                  </ul>
                </div>
                <ul className="list-inline m-a0">
                  {socialLinks.map((link, index) => (
                    <React.Fragment key={index}>
                      <li>
                        <a
                          href={link.href}
                          className={`site-button-link button-md ${link.className}`}
                        >
                          <i className={link.iconClass} />
                        </a>
                      </li>{" "}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="widget">
                <h4 className="footer-title">Usefull Link</h4>
                <div className="d-flex justify-content-between">
                  <ul className="list-2">
                    {footerLinks_1.map((link, index) => (
                      <li key={index}>
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="list-2">
                    {footerLinks_2.map((link, index) => (
                      <li key={index}>
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="widget">
                <h4 className="footer-title mb-2">Newsletter</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="subscribe-form m-b20 m-t30">
                  <form
                    className="dzSubscribe"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="dzSubscribeMsg" />
                    <div className="input-group">
                      <input
                        name="dzEmail"
                        required="required"
                        className="form-control radius-no"
                        placeholder="Your Email Address"
                        type="email"
                      />
                      <span className="input-group-btn">
                        <button
                          name="submit"
                          value="Submit"
                          type="submit"
                          className="site-button radius-no"
                        >
                          SEND
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="widget recent-posts-entry">
                <h4 className="footer-title">Recent Post</h4>
                <div className="widget-post-bx">
                  {posts3.map((post, index) => (
                    <div className="widget-post clearfix" key={index}>
                      <div className="dlab-post-media">
                        <Image
                          width={post.imageWidth}
                          height={post.imageHeight}
                          alt=""
                          src={post.imageSrc}
                        />
                      </div>
                      <div className="dlab-post-info">
                        <div className="dlab-post-meta">
                          <ul>
                            <li className="post-date">
                              <strong>{post.date}</strong>
                            </li>
                            <li className="post-author">
                              By <a href="#">{post.author}</a>
                            </li>
                          </ul>
                        </div>
                        <div className="dlab-post-header">
                          <h6 className="post-title">
                            <Link href={`/#`}>{post.title}</Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Top End */}
    </footer>
  );
}
