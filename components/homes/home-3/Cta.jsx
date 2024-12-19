import React from "react";
import Link from "next/link";
export default function Cta() {
  return (
    <div
      className="section-full call-action style1 bg-primary wow fadeIn"
      data-wow-duration="2s"
      data-wow-delay="0.2s"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-9 text-white">
            <h2 className="title">Amazing things happen to your business</h2>
          </div>
          <div className="col-lg-3 d-flex">
            <Link
              href={`/contact-1`}
              className="site-button black align-self-center ms-auto btnhover14"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
