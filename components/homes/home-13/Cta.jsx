import React from "react";
import Link from "next/link";
export default function Cta() {
  return (
    <div
      className="section-full call-action wow fadeIn"
      data-wow-duration="2s"
      data-wow-delay="0.3s"
      style={{ backgroundColor: "#c21807" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-9 text-white">
            <h2 className="title">Amazing things happen to your business</h2>
            <p className="m-b0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="col-lg-3 d-flex">
            <Link
              href={`/contact`}
              className="site-button btnhover13 white align-self-center outline ms-auto outline-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
