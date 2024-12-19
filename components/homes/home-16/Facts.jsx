import Counter from "@/components/common/Counter";
import { facts3 } from "@/data/facts";
import React from "react";

export default function Facts() {
  return (
    <section className="content-inner pt-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ev-counter-area">
              {facts3.map((stat, index) => (
                <div key={index}>
                  <h2 className="dz-title">
                    <span className="counter">
                      {" "}
                      <Counter max={stat.count} />
                    </span>
                    +
                  </h2>
                  <h4 className="dz-text">
                    {stat.title}
                    <br />
                    {stat.subtitle}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
