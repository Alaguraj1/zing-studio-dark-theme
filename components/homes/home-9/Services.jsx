import { servicesData } from "@/data/services";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Services() {
  return (
    <div className="section-full bg-gray content-inner">
      <div className="container">
        <div className="row">
          {servicesData.map((service, index) => (
            <div
              className={`col-lg-4 col-md-6 m-b30 wow ${service.animationClass}`}
              data-wow-duration="2s"
              data-wow-delay="0.3s"
              key={index}
            >
              <div className="icon-bx-wraper service-box style5 shadow fly-box">
                <div className="dlab-media dlab-img-effect zoom">
                  <Image
                    src={service.image}
                    width={700}
                    height={500}
                    alt={service.title}
                  />
                </div>
                <div className="icon-content">
                  <h2 className="dlab-tilte">
                    <Link href={`/services-details/${service.title}`}>
                      {service.title}
                    </Link>
                  </h2>
                  <Link
                    href={`/services-details/${service.title}`}
                    className="link-btn"
                  >
                    +
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
