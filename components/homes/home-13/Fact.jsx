import Counter from "@/components/common/Counter";
import { facts2 } from "@/data/facts";
import React from "react";

export default function Fact() {
  return (
    <div
      className="section-full content-inner overlay-black-dark bg-img-fix"
      style={{ backgroundImage: "url(/images/background/bg17.jpg)" }}
    >
      <div className="container">
        <div className="row">
          {facts2.map((counter, index) => (
            <div
              key={index}
              className={`col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow ${counter.animation}`}
              data-wow-duration="2s"
              data-wow-delay={counter.delay}
            >
              <div className="counter-style-1 text-center text-white">
                <div>
                  <span className="counter">
                    {" "}
                    <Counter max={counter.number} />{" "}
                  </span>
                </div>
                <span className="counter-text"> {counter.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
