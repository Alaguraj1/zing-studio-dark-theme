import { services11 } from "@/data/services";
import React from "react";

export default function Services1() {
  return (
    <div className="section-full content-inner bg-white"  style={{backgroundImage: "url(/images/background/event/bg1.png)"}}>
      <div className="container">
        <div className="section-head text-center">
          <h2 className="title">Why Choose Zing?</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <div className="row">
          {services11.map((item, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 col-sm-12 m-b30 wow ${item.wowClass}`}
              data-wow-duration="2s"
              data-wow-delay={item.wowDelay}
            >
              <div className="icon-bx-wraper bx-style-2 m-l40 p-a30 left bg-gray icon-bx-ho">
                <div className="icon-bx-sm bg-primary m-b20">
                  <a href="#" className="icon-cell">
                    <i className={item.iconClass} />
                  </a>
                </div>
                <div className="icon-content p-l40">
                  <h5 className="dlab-tilte">{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
