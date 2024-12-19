import React from "react";
import Link from "next/link";
export default function ProjectGallery() {
  return (
    <div
      className="section-full bg-img-fix content-inner-3 overlay-black-dark contact-action"
      style={{ backgroundImage: "url(/images/background/bg18.jpg)" }}
    >
      <div className="container">
        <div
          className="row relative text-center wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.9s"
        >
          <div className="col-md-12 col-lg-12 m-b30">
            <div className="contact-no-area">
              <h2 className="title">
                Plastic Waste Managment
                <br />
                &amp; Recycling
              </h2>
              <div className="contact-no justify-content-center">
                <div className="contact-left">
                  <h3 className="no">
                    <i className="sl-call-in" />
                    123-456-7890
                  </h3>
                </div>
                <div className="contact-right">
                  <Link
                    href={`/contact-2`}
                    className="site-button btnhover20 appointment-btn"
                  >
                    Get Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
