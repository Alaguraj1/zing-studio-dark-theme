import React from "react";
import Image from "next/image";
import { services6 } from "@/data/services";
import Link from "next/link";
export default function Features() {
  return (
    <div className="section-full content-inner bg-gray">
      <div className="container">
        <div className="row">
          {services6.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay={service.delay}
            >
              <div className="dlab-box service-box-2">
                <div className="dlab-media radius-sm dlab-img-overlay1 dlab-img-effect rotate">
                  <Link href={`/services-details/${service.title}`}>
                    <Image alt="" src={service.src} width={700} height={500} />
                  </Link>
                </div>
                <div className="dlab-info">
                  <h4 className="title">
                    <Link href={`/services-details/${service.title}`}>
                      {service.title}
                    </Link>
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <Link
                    href={`/services-details/${service.title}`}
                    className="site-button btnhover14"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
