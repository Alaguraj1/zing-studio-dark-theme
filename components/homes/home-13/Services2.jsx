import React from "react";
import Image from "next/image";
import { services8 } from "@/data/services";
import Link from "next/link";
export default function Services2() {
  return (
    <div className="section-full content-inner bg-gray">
      <div className="container">
        <div className="section-head text-black text-center">
          <h2 className="title">Quality With Dedication</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry has been the industry's standard dummy text ever since the
            been when an unknown printer.
          </p>
        </div>
        <div className="row">
          {services8.map((service, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 col-sm-12 m-b50 wow ${service.animation}`}
              data-wow-duration="2s"
              data-wow-delay={service.delay}
            >
              <div className="dlab-box service-box-3">
                <div className="dlab-media radius-sm dlab-img-overlay1">
                  <Link href={`/services-details/${service.title}`}>
                    <Image
                      alt={service.title}
                      src={service.imgSrc}
                      width="700"
                      height="500"
                    />
                  </Link>
                </div>
                <div className="dlab-info">
                  <h4 className="title">
                    <Link href={`/services-details/${service.title}`}>
                      {service.title}
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
