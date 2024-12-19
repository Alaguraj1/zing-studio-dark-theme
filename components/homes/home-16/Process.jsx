import React from "react";
import Image from "next/image";
import { services12 } from "@/data/services";
import Link from "next/link";
export default function Process() {
  return (
    <section
      className="content-inner-4 ev-join"
      style={{ backgroundImage: "url(/images/background/event/bg2.png)" }}
    >
      <div className="container">
        <div className="row align-items-center ev-join-inner">
          <div className="col-lg-5 m-b30">
            <div className="section-head text-black style-1">
              <h3 className="title mb-4">Why you should Join Event</h3>
              <p>
                How you transform your business as tech, consumer, habits
                industry dynamic change, Find out from those leading the charge.
              </p>
            </div>
            <a href="#" className="site-button-secondry btnhover20 radius-xl">
              Book Now
            </a>
          </div>
          <div className="col-lg-7">
            <div className="row">
              <div className="col-md-6">
                {services12.slice(0, 2).map((item, index) => (
                  <div
                    key={index}
                    className={`icon-bx-wraper style-19 m-b30 ${
                      index === 2 ? "mt-md-5 mt-0" : ""
                    }`}
                  >
                    <div className="icon-bx-md m-b20">
                      <span className="icon-cell">
                        <Image alt="" src={item.src} width={128} height={128} />
                      </span>
                    </div>
                    <h3 className="title">
                      <Link href={`/services-details/${item.title}`}>
                        {item.title}
                      </Link>
                    </h3>
                    <div className="dz-separator style-3 text-primary mt-0 mb-4" />
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="col-md-6">
                {services12.slice(2).map((item, index) => (
                  <div
                    key={index}
                    className={`icon-bx-wraper style-19 m-b30 ${
                      index === 0 ? "mt-md-5 mt-0" : ""
                    }`}
                  >
                    <div className="icon-bx-md m-b20">
                      <span className="icon-cell">
                        <Image alt="" src={item.src} width={128} height={128} />
                      </span>
                    </div>
                    <h3 className="title">
                      <Link href={`/services-details/${item.title}`}>
                        {item.title}
                      </Link>
                    </h3>
                    <div className="dz-separator style-3 text-primary mt-0 mb-4" />
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
