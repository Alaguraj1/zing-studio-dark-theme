import { services3 } from "@/data/services";
import React from "react";

export default function Services() {
  return (
    <div className="section-full bg-white content-inner-2">
      <div className="container">
        <div className="row">
          {services3.map((service, index) => (
            <div
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay={service.delay}
              key={index}
            >
              <div className="icon-bx-wraper sr-iconbox style2">
                <div className="icon-lg m-b10">
                  <a className="icon-cell">
                    <i className={service.iconClass} />
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-tilte">{service.title}</h4>
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
