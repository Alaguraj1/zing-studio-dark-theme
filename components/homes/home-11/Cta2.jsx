import React from "react";

export default function Cta2() {
  return (
    <div
      className="section-full content-inner-2 bg-primary wow fadeIn"
      data-wow-duration="2s"
      data-wow-delay="0.3s"
      style={{ backgroundImage: "url(/images/background/map-bg.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center call-action style2">
            <i className="far fa-comment-alt call-icon" />
            <h2 className="title text-white">1-800-505-5500</h2>
            <h3 className="text-white font-weight-600">
              Important Facts That You Should Know About
            </h3>
            <p className="m-b0">( All Call Are Toll Free )</p>
          </div>
        </div>
      </div>
    </div>
  );
}
