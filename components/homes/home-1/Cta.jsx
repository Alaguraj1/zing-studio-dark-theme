import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Cta() {
  return (
    <div
      className="section-full bg-img-fix content-inner-2 overlay-black-dark contact-action style2"
      style={{ backgroundImage: "url(/images/banner/bnr2.jpg)" }}
    >
      <div className="container">
        <div className="row relative">
          <div
            className="col-md-12 col-lg-8 wow fadeInLeft"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="contact-no-area">
              <h4 className="title">CEO Speacks</h4>
              <p style={{ color: "white" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              {/* <div className="contact-no">
                <div className="contact-left">
                  <h3 className="no">
                    <i className="sl-call-in" />
                    123-456-7890
                  </h3>
                </div>
                <div className="contact-right">
                  <Link
                    href={`/contact-4`}
                    className="site-button appointment-btn btnhover13"
                  >
                    Get Appointment
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
          <div
            className="col-md-12 col-lg-4 contact-img-bx wow fadeInRight relative"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <img alt="" src="/images/pic1.png" style={{ width: "90%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
