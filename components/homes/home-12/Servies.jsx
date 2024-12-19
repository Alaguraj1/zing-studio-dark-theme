import { services7 } from "@/data/services";
import React from "react";

export default function Servies() {
  return (
    <div className="section-full bg-secondry content-inner">
      <div className="container">
        <div className="section-head text-center text-white">
          <h2 className="title">Our Services</h2>
          <p>
            There are many variations of passages of Lorem Ipsum typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <div className="section-content row text-black">
          {services7.map((service, index) => (
            <div
              key={index}
              className={`col-md-6 col-lg-4 col-sm-12 service-box style3 wow ${service.animation}`}
              data-wow-duration="2s"
              data-wow-delay={service.delay}
            >
              <div className="icon-bx-wraper" data-name={service.dataName}>
                <div className="icon-lg">
                  <a href="#" className="icon-cell">
                    <i className={service.icon} />
                  </a>
                </div>
                <div className="icon-content">
                  <h2 className="dlab-title">{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
