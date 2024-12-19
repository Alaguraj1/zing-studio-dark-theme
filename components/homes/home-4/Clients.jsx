import ClientSlider from "@/components/common/ClientSlider";
import React from "react";

export default function Clients() {
  return (
    <div
      className="section-full content-inner-2 bg-gray wow fadeIn"
      data-wow-duration="2s"
      data-wow-delay="0.6s"
    >
      <div className="container">
        <div className="section-head text-black text-center">
          <h2 className="title text-capitalize">
            We work with our partners to provide project perfection,
            <br />
            <span className="text-primary">join with our parnership.</span>
          </h2>
        </div>

        <ClientSlider
          border
          parentclassName="client-logo-carousel owl-loaded owl-theme owl-carousel owl-dots-none owl-btn-center-lr owl-btn-3"
        />
      </div>
    </div>
  );
}
